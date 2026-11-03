import Link from "next/link";
import {
    ArrowUpRight,
    MapPin,
    Mail,
    Phone,
} from "lucide-react";
import CurrentYear from "../ui/CurrentYear";
import BackToTop from "../ui/BackToTop";

const navigation = [
    { label: "Home", href: "/" },
    { label: "Our Process", href: "#process" },
    { label: "Countries We Serve", href: "#countries" },
    { label: "Contact", href: "#contact" },
];

const destinations = [
    "Saudi Arabia",
    "Kuwait",
    "Qatar",
    "Oman",
    "Bahrain",
    "United Kingdom",
];

const destinationLinks: Record<string, string> = {
    "Saudi Arabia": "Saudi Arabia",
    Kuwait: "Kuwait",
    Qatar: "Qatar",
    Oman: "Oman",
    Bahrain: "Bahrain",
    "United Kingdom": "United Kingdom",
};

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#171614] text-[#faf5f2]">
            {/* Main footer */}
            <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-20 sm:px-10 lg:px-16">

                {/* Brand introduction */}
                <div className="grid grid-cols-1 gap-12 border-b border-white/15 pb-16 lg:grid-cols-[1.3fr_0.7fr] lg:pb-20">
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center text-3xl font-semibold tracking-[-0.07em] sm:text-4xl"
                        >
                            carsourcer<span className="text-[#ff4d12]">.</span>
                        </Link>

                        <p className="mt-7 max-w-xl text-2xl font-medium leading-snug tracking-[-0.04em] text-[#faf5f2]/80 sm:text-3xl lg:text-4xl">
                            Your connection to the right cars, sourced directly from Dubai.
                        </p>
                    </div>

                    <div className="flex flex-col justify-end lg:items-end">
                        <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#ff4d12]">
                            Get in touch
                        </p>

                        <div className="flex flex-col gap-4 lg:items-end">
                            <a
                                href="mailto:info@carsourcer.com"
                                className="group flex items-center gap-3 text-base text-white/75 transition-colors hover:text-white"
                            >
                                <ArrowUpRight
                                    size={15}
                                    className="opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                                />
                                <Mail size={17} strokeWidth={1.5} />
                                info@carsourcer.com
                            </a>

                            <div className="flex items-center gap-3 text-base text-white/75">
                                <MapPin size={17} strokeWidth={1.5} />
                                Dubai, United Arab Emirates
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation columns */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-14 sm:grid-cols-3 lg:grid-cols-4 lg:py-16">

                    {/* Navigation */}
                    <div>
                        <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                            Explore
                        </p>

                        <ul className="space-y-4">
                            {navigation.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                                    >
                                        {item.label}
                                        <ArrowUpRight
                                            size={13}
                                            className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div>
                        <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                            Destinations
                        </p>

                        <ul className="space-y-4">
                            {destinations.map((country) => (
                                <li key={country}>
                                    <Link
                                        href={`#countries`}
                                        className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                                    >
                                        {country}
                                        <ArrowUpRight
                                            size={13}
                                            className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                            Contact
                        </p>

                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:info@carsourcer.com"
                                    className="text-sm text-white/70 transition-colors hover:text-white"
                                >
                                    Email us
                                </a>
                            </li>

                            <li>
                                <Link
                                    href="#contact"
                                    className="text-sm text-white/70 transition-colors hover:text-white"
                                >
                                    Request a quote
                                </Link>
                            </li>

                            <li>
                                <span className="text-sm text-white/70">
                                    Dubai, UAE
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                            Follow us
                        </p>

                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                                >
                                    Instagram
                                    <ArrowUpRight
                                        size={13}
                                        className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                    />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                                >
                                    LinkedIn
                                    <ArrowUpRight
                                        size={13}
                                        className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-5 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-white/40">
                        © <CurrentYear /> Car Sourcer. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <span className="text-xs text-white/40">
                            Sourced in Dubai. Delivered worldwide.
                        </span>

                        <BackToTop />
                    </div>
                </div>
            </div>
        </footer>
    );
}