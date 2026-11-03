
"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
    ArrowUpRight,
    ChevronDown,
    MessageCircle,
} from "lucide-react";
import BrandButton from "../ui/BrandButton";

const faqs = [
    {
        number: "01",
        category: "Getting started",
        question: "How does your car sourcing service work?",
        answer:
            "Start by telling us the make, model, budget and specifications you're looking for. We review your requirements, explore suitable options in the Dubai market and share relevant vehicles for your consideration. Once you select a vehicle, we help coordinate the next steps towards purchase and delivery.",
    },
    {
        number: "02",
        category: "Vehicle sourcing",
        question: "Can you source a specific make or model?",
        answer:
            "Yes. You can request a specific make, model, year, trim or set of specifications. Share as much detail as possible, including your preferred condition and budget, and we'll look for matching options. Availability depends on what's currently offered in the market.",
    },
    {
        number: "03",
        category: "Vehicle sourcing",
        question: "Do you source both new and used cars?",
        answer:
            "We can help you explore new and pre-owned vehicle options, depending on your requirements and market availability. Let us know your preference when submitting your enquiry so we can focus the search accordingly.",
    },
    {
        number: "04",
        category: "Inspection & verification",
        question: "How can I verify a vehicle before purchasing?",
        answer:
            "Before proceeding, you should review the vehicle's available details, condition information, history and supporting documents. Where required, an independent inspection can also be arranged through a suitable inspection provider. The scope and availability of inspections depend on the vehicle and seller.",
    },
    {
        number: "05",
        category: "Pricing",
        question: "Does the quoted price include shipping and other charges?",
        answer:
            "Vehicle price, shipping, export documentation, destination duties, taxes and other charges can be separate costs. We help clarify the expected cost components for your requirements so you can understand the overall purchase and import process before moving forward.",
    },
    {
        number: "06",
        category: "Payment",
        question: "How do I make payment for a vehicle?",
        answer:
            "Payment arrangements depend on the selected vehicle, seller and agreed transaction terms. The payment process and recipient should be clearly confirmed before you proceed. We'll help you understand the steps involved and the relevant details for your enquiry.",
    },
    {
        number: "07",
        category: "Export & shipping",
        question: "Can you arrange international shipping from Dubai?",
        answer:
            "We can help coordinate the export and shipping process based on your destination. Shipping options, transit times, costs and available routes vary by country, vehicle and logistics provider. We'll help identify the relevant arrangements for your destination.",
    },
    {
        number: "08",
        category: "Export & shipping",
        question: "What documents are required to import a car?",
        answer:
            "Requirements vary by destination country. Common documents may include the vehicle invoice, export certificate, shipping documents and other customs or import paperwork. Your local customs authority may also require additional documents, inspections or approvals. Always confirm the current requirements before purchase.",
    },
    {
        number: "09",
        category: "Delivery",
        question: "How long does it take to receive my car?",
        answer:
            "The overall timeline depends on vehicle availability, purchase formalities, export processing, shipping schedules and destination customs clearance. Once your vehicle and destination are confirmed, we can help you understand the expected stages and estimated timelines.",
    },
    {
        number: "10",
        category: "Getting started",
        question: "Which countries do you source and export cars to?",
        answer:
            "We work with buyers looking to source vehicles from Dubai for international destinations. The feasibility of an order depends on the destination country's import regulations, vehicle eligibility, shipping availability and documentation requirements. Contact us with your country to discuss your requirements.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="faqs"
            className="overflow-hidden bg-[#faf5f2] py-20 text-[#171614]"
        >
            <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14">
                {/* Header */}
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-[760px] text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-lg font-medium text-[#5c514b]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff4d12]" />
                        frequently asked questions
                    </span>

                    <h2 className="mt-6 text-[clamp(2.5rem,5.5vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.06em]">
                        Good questions.
                        <br />
                        <span className="font-serif font-normal italic text-[#ff4d12]">
                            Clear answers.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-[540px] text-sm leading-7 text-[#796a63] sm:text-base sm:leading-8">
                        From finding the right car in Dubai to getting it to your
                        destination, here's what you might want to know.
                    </p>
                </motion.div>

                {/* FAQ list */}
                <div className="mx-auto mt-14 max-w-[900px] sm:mt-20">
                    <div className="border-t border-[#e5d8d0]">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <motion.div
                                    key={faq.number}
                                    initial={
                                        shouldReduceMotion
                                            ? false
                                            : { opacity: 0, y: 18 }
                                    }
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: Math.min(index * 0.035, 0.2),
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="border-b border-[#e5d8d0]"
                                >
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${index}`}
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : index)
                                        }
                                        className="group flex w-full items-center gap-4 py-6 text-left sm:gap-7 sm:py-7"
                                    >
                                        <span className="hidden w-8 shrink-0 text-xs font-semibold tabular-nums text-[#b3a49c] sm:block">
                                            {faq.number}
                                        </span>

                                        <span className="min-w-0 flex-1">
                                            <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#a3948c] sm:text-[10px]">
                                                {faq.category}
                                            </span>

                                            <span
                                                className={`block text-base font-medium leading-snug tracking-[-0.025em] transition-colors duration-300 sm:text-xl ${isOpen
                                                        ? "text-[#ff4d12]"
                                                        : "text-[#171614] group-hover:text-[#ff4d12]"
                                                    }`}
                                            >
                                                {faq.question}
                                            </span>
                                        </span>

                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-11 sm:w-11 ${isOpen
                                                    ? "rotate-180 border-[#ff4d12] bg-[#ff4d12] text-white"
                                                    : "border-[#e5d8d0] bg-white/60 text-[#796a63] group-hover:border-[#ff4d12] group-hover:text-[#ff4d12]"
                                                }`}
                                        >
                                            <ChevronDown size={18} />
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                id={`faq-answer-${index}`}
                                                key="answer"
                                                initial={
                                                    shouldReduceMotion
                                                        ? false
                                                        : { height: 0, opacity: 0 }
                                                }
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: shouldReduceMotion
                                                        ? 0
                                                        : 0.35,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-7 pl-0 sm:pb-8 sm:pl-[60px]">
                                                    <p className="max-w-[720px] text-sm leading-7 text-[#796a63] sm:text-[15px] sm:leading-8">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Contact prompt */}
                    <motion.div
                        initial={
                            shouldReduceMotion ? false : { opacity: 0, y: 25 }
                        }
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mt-12 flex flex-col gap-6 rounded-[24px] border border-[#e9ddd6] bg-white/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff0e9] text-[#ff4d12]">
                                <MessageCircle size={20} />
                            </div>

                            <div>
                                <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                                    Still have questions?
                                </h3>
                                <p className="mt-1 text-sm leading-6 text-[#796a63]">
                                    Tell us what you're looking for. We'll help
                                    you understand the next steps.
                                </p>
                            </div>
                        </div>

                        <BrandButton
                            href="#contact"
                            variant="dark"
                            size="lg"
                            arrow="diagonal"
                            className="shrink-0"
                        >
                            Talk to our team
                        </BrandButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}