
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL!;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;

const BRAND = {
    black: "#171614",
    orange: "#ff4d12",
    background: "#faf5f2",
    muted: "#796a63",
    border: "#eee5df",
};

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (char) => {
        const entities: Record<string, string> = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };

        return entities[char];
    });
}

function emailLayout(content: string) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>98 Auto</title>
    </head>
    <body style="margin:0;padding:0;background:${BRAND.background};font-family:Arial,Helvetica,sans-serif;color:${BRAND.black};">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.background};padding:40px 15px;">
            <tr>
                <td align="center">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#ffffff;border-radius:16px;overflow:hidden;">

                        <tr>
                            <td style="background:${BRAND.black};padding:28px 35px;">
                                <div style="font-size:25px;font-weight:700;letter-spacing:-1px;color:#ffffff;">
                                    98 AUTO<span style="color:${BRAND.orange};">.</span>
                                </div>
                                <div style="margin-top:7px;font-size:11px;letter-spacing:2px;color:#a9a5a2;">
                                    FIND THE RIGHT CAR. MAKE IT YOURS.
                                </div>
                            </td>
                        </tr>

                        ${content}

                        <tr>
                            <td style="padding:25px 35px;background:${BRAND.black};">
                                <p style="margin:0;color:#ffffff;font-size:13px;font-weight:600;">
                                    98 AUTO
                                </p>
                                <p style="margin:8px 0 0;color:#a9a5a2;font-size:12px;line-height:20px;">
                                    Your trusted connection to premium vehicles from Dubai.
                                </p>
                                <p style="margin:18px 0 0;color:#77716d;font-size:11px;">
                                    © ${new Date().getFullYear()} 98 Auto. All rights reserved.
                                </p>
                            </td>
                        </tr>

                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;
}

function detailRow(label: string, value: string) {
    return `
        <tr>
            <td style="padding:13px 0;border-bottom:1px solid ${BRAND.border};width:38%;vertical-align:top;">
                <span style="font-size:12px;color:${BRAND.muted};">${label}</span>
            </td>
            <td style="padding:13px 0;border-bottom:1px solid ${BRAND.border};vertical-align:top;">
                <span style="font-size:13px;font-weight:600;color:${BRAND.black};white-space:pre-wrap;">${escapeHtml(value || "Not provided")}</span>
            </td>
        </tr>
    `;
}

function adminEmail(data: {
    fullName: string;
    email: string;
    phone: string;
    country: string;
    message: string;
}) {
    const content = `
        <tr>
            <td style="padding:35px;">
                <div style="display:inline-block;padding:7px 12px;border-radius:30px;background:#fff0e9;color:${BRAND.orange};font-size:10px;font-weight:700;letter-spacing:1px;">
                    NEW VEHICLE ENQUIRY
                </div>

                <h1 style="margin:22px 0 10px;font-size:27px;line-height:1.2;letter-spacing:-1px;">
                    A new customer is interested.
                </h1>

                <p style="margin:0;color:${BRAND.muted};font-size:14px;line-height:24px;">
                    A new vehicle enquiry has been submitted through the 98 Auto website.
                </p>

                <div style="margin-top:30px;padding:20px;background:${BRAND.background};border-radius:12px;">
                    <p style="margin:0 0 6px;font-size:10px;font-weight:700;letter-spacing:1.5px;color:${BRAND.muted};">
                        CUSTOMER
                    </p>
                    <p style="margin:0;font-size:20px;font-weight:700;">
                        ${escapeHtml(data.fullName)}
                    </p>
                    <p style="margin:7px 0 0;font-size:13px;color:${BRAND.muted};">
                        ${escapeHtml(data.country)}
                    </p>
                </div>

                <h3 style="margin:30px 0 10px;font-size:14px;">
                    Contact information
                </h3>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    ${detailRow("Full name", data.fullName)}
                    ${detailRow("Email address", data.email)}
                    ${detailRow("Phone / WhatsApp", data.phone)}
                    ${detailRow("Destination country", data.country)}
                </table>

                <h3 style="margin:30px 0 12px;font-size:14px;">
                    Vehicle requirements
                </h3>

                <div style="padding:20px;border:1px solid ${BRAND.border};border-radius:12px;">
                    <p style="margin:0;font-size:13px;line-height:24px;color:${BRAND.muted};white-space:pre-wrap;">
                        ${escapeHtml(data.message || "No additional vehicle requirements provided.")}
                    </p>
                </div>

                <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:30px;">
                    <tr>
                        <td style="border-radius:8px;background:${BRAND.orange};">
                            <a href="mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent("Re: Your 98 Auto vehicle enquiry")}"
                               style="display:inline-block;padding:14px 23px;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;">
                                Reply to customer →
                            </a>
                        </td>
                    </tr>
                </table>

                <p style="margin:25px 0 0;font-size:11px;color:#a3948c;">
                    This notification was generated automatically by the 98 Auto website.
                </p>
            </td>
        </tr>
    `;

    return emailLayout(content);
}

function customerEmail(fullName: string) {
    const content = `
        <tr>
            <td style="padding:40px 35px;">
                <div style="display:inline-block;padding:7px 12px;border-radius:30px;background:#fff0e9;color:${BRAND.orange};font-size:10px;font-weight:700;letter-spacing:1px;">
                    ENQUIRY RECEIVED
                </div>

                <h1 style="margin:25px 0 12px;font-size:32px;line-height:1.2;letter-spacing:-1.3px;">
                    Thank you, ${escapeHtml(fullName)}.
                </h1>

                <p style="margin:0;font-size:15px;line-height:27px;color:${BRAND.muted};">
                    Your vehicle enquiry has successfully reached our team. We appreciate your interest in 98 Auto.
                </p>

                <div style="margin:30px 0;padding:24px;background:${BRAND.background};border-radius:12px;">
                    <p style="margin:0 0 12px;font-size:13px;font-weight:700;">
                        What happens next?
                    </p>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td width="30" valign="top" style="padding:8px 0;">
                                <div style="width:22px;height:22px;line-height:22px;text-align:center;border-radius:50%;background:${BRAND.orange};color:#ffffff;font-size:11px;font-weight:700;">1</div>
                            </td>
                            <td style="padding:8px 0;font-size:13px;line-height:21px;color:${BRAND.muted};">
                                Our team reviews your vehicle requirements.
                            </td>
                        </tr>
                        <tr>
                            <td width="30" valign="top" style="padding:8px 0;">
                                <div style="width:22px;height:22px;line-height:22px;text-align:center;border-radius:50%;background:${BRAND.orange};color:#ffffff;font-size:11px;font-weight:700;">2</div>
                            </td>
                            <td style="padding:8px 0;font-size:13px;line-height:21px;color:${BRAND.muted};">
                                We explore suitable vehicle options in Dubai.
                            </td>
                        </tr>
                        <tr>
                            <td width="30" valign="top" style="padding:8px 0;">
                                <div style="width:22px;height:22px;line-height:22px;text-align:center;border-radius:50%;background:${BRAND.orange};color:#ffffff;font-size:11px;font-weight:700;">3</div>
                            </td>
                            <td style="padding:8px 0;font-size:13px;line-height:21px;color:${BRAND.muted};">
                                Our team contacts you to discuss the next steps.
                            </td>
                        </tr>
                    </table>
                </div>

                <p style="margin:0;font-size:14px;line-height:25px;color:${BRAND.muted};">
                    From sourcing and inspection to export documentation and delivery, we're here to make your car-buying journey straightforward.
                </p>

                <h3 style="margin:30px 0 5px;font-size:16px;">
                    Find the right car. Make it yours.
                </h3>

                <p style="margin:0;font-size:13px;color:${BRAND.muted};">
                    The 98 Auto Team
                </p>
            </td>
        </tr>
    `;

    return emailLayout(content);
}

export async function POST(request: NextRequest) {
    try {
        if (!process.env.RESEND_API_KEY || !FROM_EMAIL || !ADMIN_EMAIL) {
            console.error("Contact API email environment variables are missing.");

            return NextResponse.json(
                { message: "Email service is not configured." },
                { status: 500 }
            );
        }

        const body = await request.json();

        const fullName = String(body.fullName || "").trim();
        const email = String(body.email || "").trim().toLowerCase();
        const phone = String(body.phone || "").trim();
        const country = String(body.country || "").trim();
        const message = String(body.message || "").trim();
        const website = String(body.website || "").trim();

        // Honeypot: silently accept bot submissions without sending emails.
        if (website) {
            return NextResponse.json({ success: true });
        }

        if (!fullName || !email || !country) {
            return NextResponse.json(
                { message: "Please complete all required fields." },
                { status: 400 }
            );
        }

        if (fullName.length > 100 || email.length > 254 ||
            phone.length > 30 || country.length > 80 || message.length > 3000) {
            return NextResponse.json(
                { message: "One or more fields exceed the allowed length." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        const adminHtml = adminEmail({
            fullName,
            email,
            phone,
            country,
            message,
        });

        const customerHtml = customerEmail(fullName);

        const [adminResult, customerResult] = await Promise.all([
            resend.emails.send({
                from: FROM_EMAIL,
                to: ADMIN_EMAIL,
                replyTo: email,
                subject: `New Vehicle Enquiry — ${fullName} (${country})`,
                html: adminHtml,
                text: `
New vehicle enquiry

Customer: ${fullName}
Email: ${email}
Phone: ${phone || "Not provided"}
Destination: ${country}

Vehicle requirements:
${message || "Not provided"}

Reply to: ${email}
                `.trim(),
            }),

            resend.emails.send({
                from: FROM_EMAIL,
                to: email,
                subject: "We've received your vehicle enquiry | 98 Auto",
                html: customerHtml,
                text: `
Hi ${fullName},

Thank you for contacting 98 Auto.

Your vehicle enquiry has been received successfully. Our team will review your requirements and get back to you.

From sourcing and inspection to export documentation and delivery, we're here to help.

Find the right car. Make it yours.

The 98 Auto Team
                `.trim(),
            }),
        ]);

        if (adminResult.error || customerResult.error) {
            console.error("Resend email error:", {
                admin: adminResult.error,
                customer: customerResult.error,
            });

            return NextResponse.json(
                { message: "Unable to send your enquiry. Please try again." },
                { status: 502 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Your enquiry has been sent successfully.",
        });

    } catch (error) {
        console.error("Contact API error:", error);

        return NextResponse.json(
            { message: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
