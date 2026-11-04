
import { ArrowUpRight } from "lucide-react";
import {
    SA,
    KW,
    BH,
    GB,
    ZA,
    IR,
} from "country-flag-icons/react/3x2";
import type { FlagComponent } from "country-flag-icons/react/3x2";
import BrandButton from "../ui/BrandButton";

type Country = {
    name: string;
    Flag: FlagComponent;
    description: string;
};

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
        name: "South Africa",
        Flag: ZA,
        description:
            "From search and inspection to export paperwork and delivery, we manage every step of the purchase.",
    },
    {
        name: "Iran",
        Flag: IR,
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
                        Wherever you are, one personal point of contact takes you from
                        search to delivery.
                    </p>
                </div>

                {/* Country Cards */}
                <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {countries.map(({ name, Flag, description }, index) => (
                        <article
                            key={name}
                            className="group relative rounded-[28px] outline-none [perspective:1000px]"
                        >
                            <div
                                className="
                  relative grid
                  transition-transform duration-700
                  ease-[cubic-bezier(0.2,0.8,0.2,1)]
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                  group-focus-within:[transform:rotateY(180deg)]
                  motion-reduce:transition-none
                "
                            >
                                {/* FRONT */}
                                <div
                                    className="
                    relative z-10 col-start-1 row-start-1
                    flex min-h-[390px] flex-col justify-between
                    overflow-hidden rounded-[28px]
                    border border-[#e9ddd6] bg-white/50 p-6 sm:p-7
                    [backface-visibility:hidden]
                    [pointer-events:auto]
                    group-hover:pointer-events-none
                    group-focus-within:pointer-events-none
                  "
                                >
                                    {/* Background Glow */}
                                    <div
                                        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ff4d12]/[0.07] blur-3xl transition-all duration-700 group-hover:scale-150"
                                        aria-hidden="true"
                                    />

                                    <div className="relative z-10 flex items-center justify-between">
                                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8d7c73]">
                                            Delivery destination
                                        </span>

                                        <span className="font-mono text-xs text-[#b6a69d]">
                                            0{index + 1} / 06
                                        </span>
                                    </div>

                                    {/* Flag */}
                                    <div className="relative flex flex-1 items-center justify-center py-8">
                                        <div
                                            className="absolute h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,77,18,0.15),transparent_68%)]"
                                            aria-hidden="true"
                                        />

                                        <div className="relative h-44 w-44 overflow-hidden rounded-full border-[6px] border-white shadow-[0_25px_65px_-20px_rgba(0,0,0,0.3)] ring-1 ring-[#e9ddd6] transition-transform duration-700 group-hover:scale-105">
                                            <Flag
                                                title={name}
                                                preserveAspectRatio="xMidYMid slice"
                                                className="h-full w-full"
                                            />

                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_55%)]"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>

                                    {/* Country Name */}
                                    <div className="relative z-10 flex items-end justify-between border-t border-[#eee5df] pt-5">
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a3948c]">
                                                International shipping
                                            </p>

                                            <h3 className="mt-1 text-[26px] font-medium tracking-[-0.045em] text-[#171311]">
                                                {name}
                                            </h3>
                                        </div>

                                        <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#e9ddd6] text-[#ff4d12] transition-all duration-300 group-hover:border-[#ff4d12] group-hover:bg-[#ff4d12] group-hover:text-white">
                                            <ArrowUpRight size={19} />
                                        </div>
                                    </div>
                                </div>

                                {/* BACK */}
                                <div
                                    className="
                    relative z-20 col-start-1 row-start-1
                    flex min-h-[390px] flex-col justify-between
                    overflow-hidden rounded-[28px]
                    border border-[#ff4d12] bg-[#ff4d12]
                    p-7 text-[#171311] sm:p-8
                    [backface-visibility:hidden]
                    [transform:rotateY(180deg)]
                    pointer-events-none
                    group-hover:pointer-events-auto
                    group-focus-within:pointer-events-auto
                  "
                                >
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/60">
                                                Your destination
                                            </span>

                                            <span className="font-mono text-xs text-black/50">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <div className="mt-8 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-white/40 shadow-lg">
                                            <Flag
                                                title={name}
                                                preserveAspectRatio="xMidYMid slice"
                                                className="h-full w-full"
                                            />
                                        </div>

                                        <h3 className="mt-6 max-w-[360px] text-[30px] font-medium leading-[1.05] tracking-[-0.055em]">
                                            Delivering to {name}
                                        </h3>

                                        <p className="mt-4 text-lg leading-7 text-black/70">
                                            {description}
                                        </p>
                                    </div>

                                    {/* Clickable CTA */}
                                    <div className="relative z-50 mt-8 pointer-events-auto">
                                        <BrandButton
                                            href={`?country=${encodeURIComponent(name)}#contact`}
                                            variant="dark"
                                            size="lg"
                                            arrow="diagonal"
                                            className="relative z-50 w-full"
                                        >
                                            Source a car for {name}
                                        </BrandButton>
                                    </div>
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
                        href="#contact"
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
