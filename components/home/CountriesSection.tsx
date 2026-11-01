import Link from "next/link";
import { ArrowUpRight, RotateCw } from "lucide-react";
import { SA, KW, QA, OM, BH, GB } from "country-flag-icons/react/3x2";
import type { FlagComponent } from "country-flag-icons/react/3x2";
import BrandButton from "../ui/BrandButton";

type Country = {
    name: string;
    Flag: FlagComponent;
    description: string;
};

// Edit this list to match the countries you actually deliver to.
// Flag components come from "country-flag-icons" (full-colour SVGs).
// Import any other country by its ISO code, e.g. import { AE } from "country-flag-icons/react/3x2";
const countries: Country[] = [
    {
        name: "Saudi Arabia",
        Flag: SA,
        description:
            "Vehicles sourced in Dubai and delivered to Riyadh, Jeddah and beyond, with documentation handled for you.",
    },
    {
        name: "Kuwait",
        Flag: KW,
        description:
            "Hand-picked cars matched to your specification and budget, delivered with a single point of contact.",
    },
    {
        name: "Qatar",
        Flag: QA,
        description:
            "From search and inspection to export paperwork and delivery, we manage every step of the purchase.",
    },
    {
        name: "Oman",
        Flag: OM,
        description:
            "Access Dubai's wide selection of premium and performance cars without travelling for each viewing.",
    },
    {
        name: "Bahrain",
        Flag: BH,
        description:
            "Tailored sourcing for private buyers and dealers, with transparent updates from search to handover.",
    },
    {
        name: "United Kingdom",
        Flag: GB,
        description:
            "Exceptional Dubai-market vehicles shipped internationally, with export and shipping coordinated by our team.",
    },
];

export default function CountriesServed() {
    return (
        <section
            id="countries"
            className="overflow-hidden bg-[#faf5f2] text-[#11100f]"
        >
            <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-20 lg:px-14">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-lg font-medium text-[#5c514b]">
                        <span className="h-3 w-3 rounded-full bg-[#ff4d12]" />
                        countries we serve
                    </span>

                    <h2 className="mt-6 max-w-[820px] text-[clamp(2.6rem,5.5vw,5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                        Sourced in Dubai,
                        <br />
                        <span className="font-serif font-normal italic text-[#ff4d12]">
                            delivered
                        </span>{" "}
                        to your door
                        <span className="text-[#ff4d12]">.</span>
                    </h2>

                    <p className="mt-6 max-w-[520px] text-base leading-7 text-[#796a63] sm:text-lg sm:leading-8">
                        Wherever you are, one personal point of contact takes
                        you from search to delivery.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                    {countries.map(({ name, Flag, description }) => (
                        <article
                            key={name}
                            tabIndex={0}
                            className="group rounded-3xl outline-none [perspective:1200px] focus-visible:ring-2 focus-visible:ring-[#ff4d12] focus-visible:ring-offset-4 focus-visible:ring-offset-[#faf5f2]"
                        >
                            {/* Flipper: both faces share one grid cell, so the front sets the height */}
                            <div className="grid transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)] motion-reduce:transition-none">
                                {/* FRONT */}
                                <div className="flex flex-col rounded-3xl border border-white/10 bg-[#22211f] p-4 pb-7 [backface-visibility:hidden] [grid-area:1/1]">
                                    <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white">
                                        <div
                                            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(255,77,18,0.18),transparent_65%)]"
                                            aria-hidden="true"
                                        />
                                        <div className="relative h-[52%] w-[52%] overflow-hidden rounded-full shadow-[0_24px_60px_-12px_rgba(0,0,0,0.9)] ring-1 ring-white/20">
                                            <Flag
                                                title={name}
                                                preserveAspectRatio="xMidYMid slice"
                                                className="h-full w-full"
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.28),transparent_55%)]"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>

                                    <div className="mx-3 mt-7 flex items-center justify-between gap-4">
                                        <h3 className="text-[22px] font-medium tracking-[-0.02em] text-white">
                                            {name}
                                        </h3>
                                        <span
                                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70"
                                            aria-hidden="true"
                                        >
                                            <RotateCw size={16} />
                                        </span>
                                    </div>
                                </div>

                                {/* BACK */}
                                <div className="flex flex-col justify-between rounded-3xl border border-[#ff4d12] bg-[#ff4d12] p-7 text-[#11100f] [backface-visibility:hidden] [grid-area:1/1] [transform:rotateY(180deg)] sm:p-8">
                                    <div>
                                        <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#11100f]/20">
                                            <Flag
                                                title={name}
                                                preserveAspectRatio="xMidYMid slice"
                                                className="h-full w-full"
                                            />
                                        </div>

                                        <h3 className="mt-6 text-[26px] font-medium leading-tight tracking-[-0.03em]">
                                            Delivering to {name}
                                        </h3>
                                        <p className="mt-3 text-lg leading-[1.6] text-[#11100f]/80">
                                            {description}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/contact?country=${encodeURIComponent(name)}`}
                                        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
                                    >
                                        Source a car for {name}
                                        <ArrowUpRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-12 flex flex-col items-center gap-5 text-center sm:mt-14 sm:flex-row sm:justify-center sm:gap-6">
                    <p className="text-base text-[#39312d] sm:text-lg">
                        Don&apos;t see your country? We can usually arrange it.
                    </p>

                    <BrandButton
                        href="/contact"
                        variant="outline"
                        size="lg"
                        arrow="diagonal"
                    >
                        Ask About Your Country
                    </BrandButton>
                </div>
            </div>
        </section>
    );
}