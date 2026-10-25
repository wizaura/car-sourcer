
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import HeroPhone from "./HeroPhone";
import BrandButton from "../ui/BrandButton";

export default function Hero() {
    return (
        <section className="overflow-hidden bg-[#faf5f2] text-[#11100f]">
            <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-16 lg:min-h-[680px] lg:grid-cols-[1.2fr_0.8fr] lg:gap-6 lg:px-14 lg:pb-24 lg:pt-24">
                {/* Left content */}
                <div className="relative z-10">
                    {/* Trust strip */}
                    <div className="mt-8 mb-6 flex items-center gap-3 sm:mb-11">
                        <div className="flex -space-x-2">
                            {["M", "C", "A", "D"].map((letter, i) => (
                                <span
                                    key={letter}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#faf5f2] bg-[#e8d8cf] text-xs font-semibold text-[#49372e]"
                                    style={{ backgroundColor: ["#e8d8cf", "#d7c6ba", "#f0ded1", "#d8c7bd"][i] }}
                                >
                                    {letter}
                                </span>
                            ))}
                        </div>

                        <div>
                            <div className="flex items-center gap-0.5 text-[#ff4d12]">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} size={14} fill="currentColor" />
                                ))}
                            </div>
                            <p className="mt-0.5 text-xs font-medium text-[#39312d]">
                                Your trusted car sourcing partner
                            </p>
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="max-w-[850px] text-[clamp(3.6rem,7.5vw,7rem)] font-medium leading-[0.9] tracking-[-0.075em]">
                        Find your
                        <br />
                        <span className="font-serif font-normal italic text-[#ff4d12]">
                            dream car
                        </span>{" "}
                        without
                        <br />
                        compromise<span className="text-[#ff4d12]">.</span>
                    </h1>

                    <p className="mt-7 max-w-[620px] text-base leading-7 text-[#796a63] sm:mt-8 sm:text-lg sm:leading-8">
                        We source exceptional vehicles from Dubai&apos;s
                        automotive market, tailored to your preferences,
                        specifications and budget. One personal point
                        of contact, from search to delivery.
                    </p>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
                        <BrandButton
                            href="/contact"
                            variant="orange"
                            size="lg"
                        >
                            Source My Car
                        </BrandButton>

                        <BrandButton
                            href="#process"
                            variant="outline"
                            size="lg"
                            arrow="diagonal"
                        >
                            How It Works
                        </BrandButton>
                    </div>

                    <p className="mt-7 text-xs tracking-wide text-[#796a63]">
                        DUBAI, UAE <span className="mx-2 text-[#ff4d12]">•</span>
                        SOURCING BUILT AROUND YOU
                    </p>
                </div>

                {/* Right phone component */}
                <div className="relative z-0 mx-auto w-full max-w-[440px] py-8 lg:py-0">
                    <HeroPhone />
                </div>
            </div>
        </section>
    );
}
