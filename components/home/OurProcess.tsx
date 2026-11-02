
"use client";

import Link from "next/link";
import {
    ArrowUpRight,
    ClipboardList,
    FileText,
    Search,
    ShieldCheck,
    Truck,
} from "lucide-react";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useReducedMotion,
    useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

const steps = [
    {
        number: "01",
        title: "Tell us what you want.",
        description:
            "Share your preferred make, model, budget and specifications. Tell us exactly what your ideal car looks like.",
        label: "YOUR REQUIREMENTS",
        icon: ClipboardList,
        side: "left",
    },
    {
        number: "02",
        title: "Get your personalised quote.",
        description:
            "We review your requirements and put together a tailored sourcing proposal with the details you need to move forward.",
        label: "YOUR SOURCING PLAN",
        icon: FileText,
        side: "right",
    },
    {
        number: "03",
        title: "We find the right dealers.",
        description:
            "Our team searches the Dubai market, identifies suitable vehicles and finds dealerships that match your expectations.",
        label: "MARKET RESEARCH",
        icon: Search,
        side: "left",
    },
    {
        number: "04",
        title: "Compare, review & connect.",
        description:
            "Explore shortlisted options, compare specifications and pricing, and get connected with the most suitable dealer.",
        label: "YOUR SHORTLIST",
        icon: ShieldCheck,
        side: "right",
    },
    {
        number: "05",
        title: "Make it yours.",
        description:
            "Once you've made your choice, we help coordinate the purchase, export documentation and delivery to your destination.",
        label: "PURCHASE TO DELIVERY",
        icon: Truck,
        side: "left",
    },
];

const ROAD_PATH = `
  M500 0
  C500 110 230 100 230 230
  C230 360 770 350 770 490
  C770 630 230 620 230 760
  C230 900 770 890 770 1030
  C770 1100 500 1100 500 1160
`;

/**
 * Calculate the exact SVG position and direction of the car.
 *
 * Important:
 * - The car and road use the same SVG coordinate system.
 * - The car is positioned using the native SVG transform attribute.
 * - The car artwork faces upwards by default.
 */
function updateCarPosition(
    path: SVGPathElement,
    car: SVGGElement,
    progress: number
) {
    const length = path.getTotalLength();

    if (!length) return;

    const clampedProgress = Math.max(0, Math.min(1, progress));
    const distance = clampedProgress * length;

    const point = path.getPointAtLength(distance);

    // Use a small distance ahead to calculate the road's tangent.
    const offset = Math.min(3, length * 0.002);

    let previousPoint: DOMPoint;
    let nextPoint: DOMPoint;

    if (distance >= length - offset) {
        previousPoint = path.getPointAtLength(
            Math.max(0, distance - offset)
        );
        nextPoint = point;
    } else {
        previousPoint = point;
        nextPoint = path.getPointAtLength(
            Math.min(length, distance + offset)
        );
    }

    const dx = nextPoint.x - previousPoint.x;
    const dy = nextPoint.y - previousPoint.y;

    // SVG coordinates have their Y axis pointing downwards.
    // The car's front is already pointing upwards.
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;

    // Native SVG transform: translate to the path position,
    // then rotate the car to match the road direction.
    car.setAttribute(
        "transform",
        `translate(${point.x} ${point.y}) rotate(${angle})`
    );
}

function RoadmapCard({
    step,
    index,
}: {
    step: (typeof steps)[number];
    index: number;
}) {
    const Icon = step.icon;
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={
                shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 45, filter: "blur(8px)" }
            }
            whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative w-full max-w-[460px] rounded-[24px] border border-[#e9ddd6] bg-white/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#ff4d12]/40 hover:bg-white hover:shadow-[0_20px_60px_rgba(40,25,15,0.07)] sm:p-8"
        >
            <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a3948c]">
                    {step.label}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff0e9] text-[#ff4d12] transition-all duration-300 group-hover:bg-[#ff4d12] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                </div>
            </div>

            <h3 className="mt-7 text-[clamp(1.65rem,2.5vw,2.2rem)] font-medium leading-[1.05] tracking-[-0.05em]">
                {step.title}
            </h3>

            <p className="mt-4 max-w-[370px] text-sm leading-7 text-[#796a63] sm:text-base sm:leading-8">
                {step.description}
            </p>

            <div className="mt-7 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b3a49c]">
                <span className="h-px w-6 bg-[#ff4d12]" />
                Step {index + 1} of 5
            </div>
        </motion.div>
    );
}

/**
 * The car is deliberately rendered as a normal SVG group.
 * Its position is controlled through the SVG transform attribute,
 * not CSS translate/rotate transforms.
 */
function RoadCar({
    pathRef,
    progress,
}: {
    pathRef: React.RefObject<SVGPathElement | null>;
    progress: ReturnType<typeof useSpring>;
}) {
    const carRef = useRef<SVGGElement>(null);

    // Set the initial position and keep the car synchronized
    // with the same progress value used by the orange road.
    useEffect(() => {
        const path = pathRef.current;
        const car = carRef.current;

        if (!path || !car) return;

        updateCarPosition(path, car, progress.get());
    }, [pathRef, progress]);

    useMotionValueEvent(progress, "change", (latest) => {
        const path = pathRef.current;
        const car = carRef.current;

        if (!path || !car) return;

        updateCarPosition(path, car, latest);
    });

    return (
        <g ref={carRef}>
            {/* Car artwork is centered around its own origin */}
            <g transform="translate(-24.7 -35.75) scale(0.65)">
                {/* Shadow */}
                <path
                    d="M18 38C18 29 23 22 27 18C30 15 46 15 49 18C53 22 58 29 58 38L61 70C62 77 58 84 52 87L48 91H28L24 87C18 84 14 77 15 70L18 38Z"
                    fill="#171614"
                    opacity="0.12"
                    transform="translate(0 3)"
                />

                {/* Car body */}
                <path
                    d="M18 38C18 29 23 22 27 18C30 15 46 15 49 18C53 22 58 29 58 38L61 70C62 77 58 84 52 87L48 91H28L24 87C18 84 14 77 15 70L18 38Z"
                    fill="#171614"
                    stroke="#171614"
                    strokeWidth="1.5"
                />

                {/* Bonnet */}
                <path
                    d="M24 24C27 21 30 20 38 20C46 20 49 21 52 24L56 39H20L24 24Z"
                    fill="#292723"
                    stroke="#faf5f2"
                    strokeOpacity="0.35"
                    strokeWidth="1"
                />

                {/* Front windscreen */}
                <path
                    d="M22 42C24 38 28 36 38 36C48 36 52 38 54 42L51 53H25L22 42Z"
                    fill="#faf5f2"
                    stroke="#a3948c"
                    strokeWidth="1"
                />

                {/* Roof */}
                <path
                    d="M25 55H51L53 68C49 73 45 75 38 75C31 75 27 73 23 68L25 55Z"
                    fill="#393733"
                    stroke="#faf5f2"
                    strokeOpacity="0.4"
                    strokeWidth="1"
                />

                {/* Rear windscreen */}
                <path
                    d="M25 77H51L48 85H28L25 77Z"
                    fill="#faf5f2"
                    stroke="#a3948c"
                    strokeWidth="1"
                />

                {/* Headlights */}
                <path
                    d="M19 29L25 26L23 32L18 34"
                    stroke="#faf5f2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <path
                    d="M57 29L51 26L53 32L58 34"
                    stroke="#faf5f2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />

                {/* Rear lights */}
                <path
                    d="M18 79L24 82M58 79L52 82"
                    stroke="#ff4d12"
                    strokeWidth="2"
                    strokeLinecap="round"
                />

                {/* Wheels */}
                <rect x="12" y="39" width="6" height="16" rx="2" fill="#11100f" />
                <rect x="58" y="39" width="6" height="16" rx="2" fill="#11100f" />
                <rect x="12" y="65" width="6" height="16" rx="2" fill="#11100f" />
                <rect x="58" y="65" width="6" height="16" rx="2" fill="#11100f" />
            </g>
        </g>
    );
}



function MobileRoadCar({
    progress,
}: {
    progress: ReturnType<typeof useSpring>;
}) {
    // The car uses a fixed-size SVG, so its proportions never change
    // when the mobile road container becomes taller or shorter.
    const carTop = useTransform(progress, (value) => `${value * 100}%`);

    return (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {/* The road, progress line and car share the same horizontal centre. */}
            <div className="absolute bottom-0 left-1/2 top-0 w-[2px] -translate-x-1/2 rounded-full bg-[#e5d8d0]" />
            <motion.div
                className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 origin-top rounded-full bg-[#ff4d12]"
                style={{ height: "100%", scaleY: progress }}
            />

            {/* Fixed aspect ratio: only the car's position follows scroll progress. */}
            <motion.div
                className="absolute left-1/2 top-0 z-[2] flex h-[55px] w-[38px] items-center justify-center"
                style={{ top: carTop, x: "-50%", y: "-50%" }}
            >
                <svg
                    viewBox="0 0 76 110"
                    width="38"
                    height="55"
                    className="block h-[55px] w-[38px] overflow-visible"
                    fill="none"
                >
                    {/* Original artwork faces up; flip it to face down on mobile. */}
                    <g transform="rotate(180 38 55)">
                        <path
                            d="M18 38C18 29 23 22 27 18C30 15 46 15 49 18C53 22 58 29 58 38L61 70C62 77 58 84 52 87L48 91H28L24 87C18 84 14 77 15 70L18 38Z"
                            fill="#171614" opacity="0.15" transform="translate(0 3)"
                        />
                        <path
                            d="M18 38C18 29 23 22 27 18C30 15 46 15 49 18C53 22 58 29 58 38L61 70C62 77 58 84 52 87L48 91H28L24 87C18 84 14 77 15 70L18 38Z"
                            fill="#171614" stroke="#171614" strokeWidth="1.5"
                        />
                        <path
                            d="M24 24C27 21 30 20 38 20C46 20 49 21 52 24L56 39H20L24 24Z"
                            fill="#292723" stroke="#faf5f2" strokeOpacity="0.35" strokeWidth="1"
                        />
                        <path
                            d="M22 42C24 38 28 36 38 36C48 36 52 38 54 42L51 53H25L22 42Z"
                            fill="#faf5f2" stroke="#a3948c" strokeWidth="1"
                        />
                        <path
                            d="M25 55H51L53 68C49 73 45 75 38 75C31 75 27 73 23 68L25 55Z"
                            fill="#393733" stroke="#faf5f2" strokeOpacity="0.4" strokeWidth="1"
                        />
                        <path
                            d="M25 77H51L48 85H28L25 77Z"
                            fill="#faf5f2" stroke="#a3948c" strokeWidth="1"
                        />
                        <path
                            d="M19 29L25 26L23 32L18 34M57 29L51 26L53 32L58 34"
                            stroke="#faf5f2" strokeWidth="1.5" strokeLinecap="round"
                        />
                        <path
                            d="M18 79L24 82M58 79L52 82"
                            stroke="#ff4d12" strokeWidth="2" strokeLinecap="round"
                        />
                        <rect x="12" y="39" width="6" height="16" rx="2" fill="#11100f" />
                        <rect x="58" y="39" width="6" height="16" rx="2" fill="#11100f" />
                        <rect x="12" y="65" width="6" height="16" rx="2" fill="#11100f" />
                        <rect x="58" y="65" width="6" height="16" rx="2" fill="#11100f" />
                    </g>
                </svg>
            </motion.div>
        </div>
    );
}

export default function OurProcess() {
    const roadmapRef = useRef<HTMLDivElement>(null);
    const desktopPathRef = useRef<SVGPathElement>(null);

    const { scrollYProgress } = useScroll({
        target: roadmapRef,
        offset: ["start 75%", "end 35%"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 25,
        mass: 0.3,
    });

    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="process"
            className="overflow-hidden bg-[#faf5f2] text-[#11100f]"
        >
            <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-20 lg:px-14">
                {/* Header */}
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col items-center text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-lg font-medium text-[#5c514b]">
                        <span className="h-3 w-3 rounded-full bg-[#ff4d12]" />
                        our process
                    </span>

                    <h2 className="mt-6 max-w-[900px] text-[clamp(2.6rem,5.5vw,5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                        From your brief
                        <br />
                        <span className="font-serif font-normal italic text-[#ff4d12]">
                            to your dream car
                        </span>
                        <span className="text-[#ff4d12]">.</span>
                    </h2>

                    <p className="mt-6 max-w-[520px] text-base leading-7 text-[#796a63] sm:text-lg sm:leading-8">
                        A clear road from the first conversation to the keys in your
                        hands. Here's how we make sourcing a car from Dubai easier.
                    </p>
                </motion.div>

                {/* Scroll-driven roadmap */}
                <div
                    ref={roadmapRef}
                    className="relative mx-auto mt-16 max-w-[1120px] sm:mt-24 lg:mt-28"
                >
                    {/* Desktop road */}
                    <div className="pointer-events-none absolute inset-0 hidden lg:block">
                        <svg
                            viewBox="0 0 1000 1160"
                            preserveAspectRatio="none"
                            className="h-full w-full overflow-visible"
                            fill="none"
                        >
                            {/* Base road */}
                            <path
                                d={ROAD_PATH}
                                stroke="#e5d8d0"
                                strokeWidth="3"
                                strokeDasharray="8 10"
                                strokeLinecap="round"
                            />

                            {/* Animated orange road */}
                            <motion.path
                                d={ROAD_PATH}
                                stroke="#ff4d12"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                style={{
                                    pathLength: smoothProgress,
                                }}
                            />

                            {/* Moving car: uses the exact same path geometry */}
                            <RoadCar
                                pathRef={desktopPathRef}
                                progress={smoothProgress}
                            />

                            {/* Invisible path used for accurate car positioning */}
                            <path
                                ref={desktopPathRef}
                                d={ROAD_PATH}
                                fill="none"
                                stroke="none"
                                pointerEvents="none"
                            />
                        </svg>
                    </div>

                        {/* Mobile road with synchronized SVG car */}
                        <div className="pointer-events-none absolute bottom-8 left-[19px] top-5 w-10 lg:hidden">
                            <MobileRoadCar progress={smoothProgress} />
                        </div>


                    {/* Steps */}
                    <div className="relative space-y-12 sm:space-y-16 lg:space-y-0">
                        {steps.map((step, index) => {
                            const isLeft = step.side === "left";

                            return (
                                <div
                                    key={step.number}
                                    className="relative grid grid-cols-[40px_minmax(0,1fr)] items-start gap-5 lg:min-h-[235px] lg:grid-cols-[1fr_140px_1fr] lg:items-center lg:gap-0"
                                >
                                    {/* Card: mobile and desktop left */}
                                    <div
                                        className={`col-start-2 row-start-1 ${isLeft
                                            ? "lg:col-start-1 lg:justify-self-end"
                                            : "lg:col-start-1"
                                            }`}
                                    >
                                        {isLeft && (
                                            <RoadmapCard step={step} index={index} />
                                        )}

                                        {!isLeft && (
                                            <div className="lg:hidden">
                                                <RoadmapCard step={step} index={index} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Milestone */}
                                    <motion.div
                                        initial={
                                            shouldReduceMotion
                                                ? false
                                                : { scale: 0.5, opacity: 0 }
                                        }
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.1,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-[5px] border-[#faf5f2] bg-[#ff4d12] text-[10px] font-bold text-white shadow-[0_0_0_1px_rgba(255,77,18,0.25)] lg:relative lg:col-start-2 lg:row-start-1 lg:mx-auto lg:h-[76px] lg:w-[76px] lg:border-[8px] lg:text-sm"
                                    >
                                        {step.number}
                                    </motion.div>

                                    {/* Desktop right card */}
                                    <div
                                        className={`hidden lg:block lg:row-start-1 ${isLeft
                                            ? "lg:col-start-3"
                                            : "lg:col-start-3 lg:justify-self-start"
                                            }`}
                                    >
                                        {!isLeft && (
                                            <RoadmapCard step={step} index={index} />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Destination */}
                    <motion.div
                        initial={
                            shouldReduceMotion
                                ? false
                                : { opacity: 0, y: 35, filter: "blur(8px)" }
                        }
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative mt-14 flex items-center gap-5 pl-1 lg:mt-10 lg:justify-center lg:pl-0"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#171614] text-white">
                            <Truck size={19} />
                        </div>

                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ff4d12]">
                                Destination reached
                            </p>

                            <p className="mt-1 text-xl font-medium tracking-tight">
                                Your car. Your way.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto mt-20 flex max-w-[1120px] flex-col gap-7 rounded-[28px] bg-[#171614] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between"
                >
                    <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ff4d12]">
                            Ready to get started?
                        </span>

                        <h3 className="mt-3 max-w-[550px] text-3xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-4xl">
                            Have a car in mind?
                            <br />
                            Let's find it.
                        </h3>
                    </div>

                    <Link
                        href="/contact"
                        className="group inline-flex min-h-14 items-center justify-between gap-6 rounded-xl bg-[#ff4d12] px-5 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e9440d]"
                    >
                        <span>Start your enquiry</span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#ff4d12]">
                            <ArrowUpRight size={20} />
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}