"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
    CheckCircle2,
    LoaderCircle,
    ArrowUpRight,
    MessageCircle,
} from "lucide-react";
import BrandButton from "../ui/BrandButton";

const initialForm = {
    fullName: "",
    email: "",
    phone: "",
    country: "",
    make: "",
    model: "",
    year: "",
    condition: "Any",
    budget: "",
    currency: "AED",
    timeframe: "",
    message: "",
    website: "",
};

const inputClass =
    "mt-2 w-full rounded-xl border border-[#e8ddd6] bg-white px-4 py-3.5 text-sm text-[#171614] outline-none transition-all placeholder:text-[#b5a79f] focus:border-[#ff4d12] focus:ring-2 focus:ring-[#ff4d12]/10";

const labelClass =
    "text-[11px] font-semibold uppercase tracking-[0.13em] text-[#796a63]";

export default function ContactForm() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [feedback, setFeedback] = useState("");

    const shouldReduceMotion = useReducedMotion();

    // Sync destination country with URL changes
    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout> | undefined;

        const syncCountryFromUrl = () => {
            const params = new URLSearchParams(window.location.search);
            console.log(params,'ss')
            const selectedCountry = params.get("country");

            if (!selectedCountry) return;

            setForm((prev) => {
                if (prev.country === selectedCountry) return prev;

                return {
                    ...prev,
                    country: selectedCountry,
                };
            });
        };

        // Initial page-load check
        syncCountryFromUrl();

        // Defer URL event updates until React has completed its current lifecycle
        const handleUrlChange = () => {
            if (timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                syncCountryFromUrl();
            }, 0);
        };

        window.addEventListener("popstate", handleUrlChange);
        window.addEventListener("country-url-change", handleUrlChange);

        return () => {
            if (timeoutId) clearTimeout(timeoutId);

            window.removeEventListener("popstate", handleUrlChange);
            window.removeEventListener("country-url-change", handleUrlChange);
        };
    }, []);

    const updateField = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setStatus("loading");
        setFeedback("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Something went wrong. Please try again."
                );
            }

            setStatus("success");
            setFeedback(
                "Your enquiry has been sent successfully. Our team will get back to you soon."
            );

            // Keep the selected destination for another enquiry
            setForm({
                ...initialForm,
                country: form.country,
            });
        } catch (error) {
            setStatus("error");
            setFeedback(
                error instanceof Error
                    ? error.message
                    : "Unable to send your enquiry. Please try again."
            );
        }
    };

    return (
        <section
            id="contact"
            className="scroll-mt-20 overflow-hidden bg-[#faf5f2] py-20 text-[#171614]"
        >
            <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                    {/* Left information panel */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex flex-col"
                    >
                        <span className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#5c514b]">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ff4d12]" />
                            let's find your car
                        </span>

                        <h2 className="mt-7 text-[clamp(2.8rem,5.5vw,5rem)] font-medium leading-[0.94] tracking-[-0.065em]">
                            Your next car
                            <br />
                            starts with
                            <br />
                            <span className="font-serif font-normal italic text-[#ff4d12]">
                                a conversation.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-[430px] text-sm leading-7 text-[#796a63] sm:text-base sm:leading-8">
                            Tell us what you're looking for. Share a few details
                            about your preferred vehicle and destination. We'll
                            take it from there.
                        </p>

                        <div className="mt-12 space-y-7 border-t border-[#e5d8d0] pt-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#ff4d12]">
                                    <MessageCircle size={19} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">
                                        Personalised sourcing
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-[#796a63]">
                                        We understand your requirements and find
                                        suitable vehicles in Dubai.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#ff4d12]">
                                    <ArrowUpRight size={19} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">
                                        From Dubai to your door
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-[#796a63]">
                                        We coordinate the sourcing, export
                                        documentation and delivery.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto hidden pt-14 lg:block">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a3948c]">
                                CAR SOURCER
                            </p>
                            <p className="mt-2 text-sm text-[#796a63]">
                                Find the right car. Make it yours.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form panel */}
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="rounded-[26px] border border-[#e9ddd6] bg-white p-5 shadow-[0_20px_70px_rgba(40,25,15,0.045)] sm:p-8 lg:p-10"
                    >
                        {status === "success" ? (
                            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#edf8ef] text-[#25834a]">
                                    <CheckCircle2 size={30} />
                                </div>

                                <h3 className="mt-6 text-2xl font-medium tracking-tight">
                                    Enquiry received.
                                </h3>

                                <p className="mt-3 max-w-sm text-sm leading-7 text-[#796a63]">
                                    {feedback}
                                </p>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setStatus("idle");
                                        setFeedback("");
                                    }}
                                    className="mt-8 rounded-xl bg-[#171614] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff4d12]"
                                >
                                    Send another enquiry
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-8 flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#ff4d12]">
                                            Vehicle enquiry
                                        </p>

                                        <h3 className="mt-2 text-2xl font-medium tracking-[-0.045em] sm:text-3xl">
                                            Tell us what you need.
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-[#796a63]">
                                            Just a few details to get started.
                                        </p>
                                    </div>

                                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff0e9] text-[#ff4d12] sm:flex">
                                        <ArrowUpRight size={22} />
                                    </span>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">

                                    {/* Personal details */}
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <label className={labelClass}>
                                            Full name *
                                            <input
                                                required
                                                name="fullName"
                                                value={form.fullName}
                                                onChange={updateField}
                                                autoComplete="name"
                                                placeholder="Your full name"
                                                className={inputClass}
                                                maxLength={100}
                                            />
                                        </label>

                                        <label className={labelClass}>
                                            Email address *
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={updateField}
                                                autoComplete="email"
                                                placeholder="you@example.com"
                                                className={inputClass}
                                                maxLength={254}
                                            />
                                        </label>

                                        <label className={labelClass}>
                                            WhatsApp / Phone
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={updateField}
                                                autoComplete="tel"
                                                placeholder="+971 50 000 0000"
                                                className={inputClass}
                                                maxLength={30}
                                            />
                                        </label>

                                        <label className={labelClass}>
                                            Destination country *
                                            <input
                                                required
                                                name="country"
                                                value={form.country}
                                                onChange={updateField}
                                                autoComplete="country-name"
                                                placeholder="Where should we deliver?"
                                                className={inputClass}
                                                maxLength={80}
                                            />
                                        </label>
                                    </div>

                                    {/* Vehicle requirements */}
                                    <div>
                                        <label className={labelClass}>
                                            What car are you looking for?
                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={updateField}
                                                rows={5}
                                                placeholder="e.g. Mercedes-Benz GLE 450, 2023 or newer, preferably black. My budget is around AED 200,000..."
                                                className={`${inputClass} resize-y`}
                                                maxLength={3000}
                                            />
                                        </label>

                                        <p className="mt-2 text-xs leading-5 text-[#a3948c]">
                                            Include the make, model, year, budget
                                            or any preferences you have. You can
                                            leave this blank if you're still exploring.
                                        </p>
                                    </div>

                                    {/* Honeypot */}
                                    <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
                                        <label>
                                            Leave this field empty
                                            <input
                                                name="website"
                                                value={form.website}
                                                onChange={updateField}
                                                tabIndex={-1}
                                                autoComplete="off"
                                            />
                                        </label>
                                    </div>

                                    {feedback && status === "error" && (
                                        <p
                                            role="alert"
                                            className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                                        >
                                            {feedback}
                                        </p>
                                    )}

                                    <div className="border-t border-[#eee5df] pt-6">
                                        <BrandButton
                                            type="submit"
                                            variant="orange"
                                            size="lg"
                                            disabled={status === "loading"}
                                            className="w-full"
                                            arrow="diagonal"
                                        >
                                            {status === "loading" ? (
                                                <span className="flex items-center gap-2">
                                                    <LoaderCircle
                                                        size={18}
                                                        className="animate-spin"
                                                    />
                                                    Sending your enquiry...
                                                </span>
                                            ) : (
                                                "Send vehicle enquiry"
                                            )}
                                        </BrandButton>

                                        <p className="mt-4 text-center text-[11px] leading-5 text-[#a3948c]">
                                            By submitting this form, you agree
                                            to be contacted about your vehicle enquiry.
                                        </p>
                                    </div>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}