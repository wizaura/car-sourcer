
import type { Metadata } from "next";

import BrandCarousel from "@/components/home/BrandCarousel";
import ContactForm from "@/components/home/ContactForm";
import CountriesServed from "@/components/home/CountriesSection";
import FAQ from "@/components/home/FAQSection";
import Hero from "@/components/home/Hero";
import OurProcess from "@/components/home/OurProcess";

export const metadata: Metadata = {
  title: "Car Sourcing in Dubai, UAE | Buy Cars for Export",

  description:
    "Find your ideal car with 98Auto, a Dubai-based car sourcing partner. We help international buyers source new and used vehicles from the UAE, compare options and coordinate export and delivery.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Car Sourcing in Dubai, UAE | 98Auto",
    description:
      "Source your next car from Dubai with 98Auto. Personalised vehicle sourcing, access to leading automotive brands and international export coordination.",
    url: "https://98auto.com/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />

      <BrandCarousel />

      <CountriesServed />

      <OurProcess />

      <FAQ />

      <ContactForm />
    </main>
  );
}
