
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
        question: "What is 98Auto and how does your car sourcing service work?",
        answer:
            "98Auto is a Dubai-based car sourcing company helping international buyers find suitable vehicles across the UAE. We understand your requirements, identify relevant car dealers and suppliers, compare available vehicle options and help you explore competitive offers. Once you select a vehicle, we assist with coordinating the purchase, export and delivery process based on your destination.",
    },
    {
        number: "02",
        category: "Car sourcing in Dubai",
        question: "Can you help me find the best car dealers in Dubai?",
        answer:
            "Yes. 98Auto helps buyers connect with suitable car dealers and suppliers in Dubai and across the UAE. Instead of approaching multiple dealerships individually, you can share your requirements with us. We help identify relevant sellers, explore available vehicles and compare offers so you can make a more informed purchasing decision.",
    },
    {
        number: "03",
        category: "Pricing & savings",
        question: "Can I get better car prices through your sourcing service?",
        answer:
            "Our sourcing approach helps you explore multiple dealer and supplier offers instead of relying on a single quotation. By comparing available vehicles, specifications and pricing, we aim to help you identify competitive options that match your budget. Final prices depend on the vehicle, seller, availability and agreed transaction terms.",
    },
    {
        number: "04",
        category: "Vehicle sourcing",
        question: "Can you source a specific car model or brand from the UAE?",
        answer:
            "Yes. You can request almost any vehicle by sharing its make, model, year, trim, engine, specifications and preferred budget. Whether you are looking for Toyota, Nissan, Mercedes-Benz, BMW, Land Rover or another automotive brand, we can explore suitable options from dealers and suppliers across the UAE, subject to availability.",
    },
    {
        number: "05",
        category: "Vehicle sourcing",
        question: "Do you source both new and used cars in Dubai?",
        answer:
            "Yes. We help international buyers explore both brand-new and pre-owned vehicles available in the UAE market. Share your preferred vehicle condition, model, specifications and budget, and we will help identify suitable options from relevant dealers and suppliers.",
    },
    {
        number: "06",
        category: "Vehicle verification",
        question: "How can I verify a car before buying it from Dubai?",
        answer:
            "Before purchasing a vehicle, buyers should review its specifications, condition, mileage, available service history and ownership or export documents. Depending on the vehicle and seller, an independent inspection can also be arranged through a suitable inspection provider. We help you understand the available vehicle information so you can make a more informed decision before proceeding.",
    },
    {
        number: "07",
        category: "International buyers",
        question: "Can I buy a car from Dubai if I live in another country?",
        answer:
            "Yes. International buyers can use 98Auto to explore vehicle sourcing opportunities in Dubai without having to visit multiple dealerships themselves. Share your vehicle requirements and destination country with us. We help identify suitable vehicles and dealers and coordinate the next steps involved in purchasing and exporting the selected vehicle.",
    },
    {
        number: "08",
        category: "Export & shipping",
        question: "Can you help export cars from Dubai to other countries?",
        answer:
            "Yes. We assist buyers looking to source vehicles in Dubai for export to international destinations. Depending on your destination, vehicle eligibility and logistics arrangements, we can help coordinate the relevant export and shipping process. Shipping routes, costs, documentation and import regulations vary between countries.",
    },
    {
        number: "09",
        category: "Export & shipping",
        question: "Which countries can I import cars from Dubai to?",
        answer:
            "98Auto works with international buyers interested in sourcing vehicles from the UAE for destinations including Saudi Arabia, Kuwait, Bahrain, South Africa, the United Kingdom and other international markets, subject to import regulations and shipping availability. Contact us with your destination country to discuss vehicle eligibility, export requirements and available arrangements.",
    },
    {
        number: "10",
        category: "Pricing & costs",
        question: "How much does it cost to buy and export a car from Dubai?",
        answer:
            "The total cost depends on the selected vehicle, dealer price, sourcing arrangements, export documentation, shipping method, destination customs duties, taxes and local registration charges. We help you understand the different cost components associated with your requirements so you can evaluate the expected overall expense before proceeding.",
    },
    {
        number: "11",
        category: "Payment",
        question: "How does payment work when purchasing a car through 98Auto?",
        answer:
            "Payment arrangements depend on the selected vehicle, seller and agreed transaction terms. Before proceeding, the buyer should confirm the vehicle price, payment recipient, applicable charges and transaction conditions. We help clarify the purchasing process and coordinate the relevant communication with the seller.",
    },
    {
        number: "12",
        category: "Export documentation",
        question: "What documents are required to export a car from the UAE?",
        answer:
            "Common vehicle export documents may include the vehicle purchase invoice, export certificate, shipping documents and customs paperwork. Additional documents, inspections or approvals may be required depending on the destination country and vehicle category. We help buyers understand the export documentation process, while final import requirements should be confirmed with the destination country's customs and transport authorities.",
    },
    {
        number: "13",
        category: "Delivery",
        question: "How long does it take to ship a car from Dubai internationally?",
        answer:
            "International car shipping timelines depend on the destination, shipping method, vessel schedules, export processing and customs clearance. Sea freight is commonly used for international vehicle transportation, but available options vary by destination. Once your destination and vehicle are confirmed, we can help you understand the expected shipping and delivery stages.",
    },
    {
        number: "14",
        category: "Car sourcing in UAE",
        question: "Do you source cars only in Dubai or across the UAE?",
        answer:
            "Although 98Auto is primarily based in Dubai, our car sourcing network can extend across the UAE depending on vehicle availability and your requirements. We help buyers explore suitable dealers and suppliers in relevant UAE markets to find vehicles that match their specifications and budget.",
    },
    {
        number: "15",
        category: "Getting started",
        question: "How can I request a car sourcing quotation from 98Auto?",
        answer:
            "Getting started is simple. Contact 98Auto through our enquiry form and share your preferred car brand, model, year, specifications, budget and destination country. Our team will review your requirements, explore suitable vehicle options and help you understand the available dealer offers and next steps towards purchasing and exporting your car from Dubai.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="faqs"
            className="overflow-hidden bg-white py-20 text-[#171614]"
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
                <div className="mx-auto mt-14 max-w-7xl sm:mt-20">
                    <div className="border-t border-[#e5d8d0]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">

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