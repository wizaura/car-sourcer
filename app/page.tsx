import BrandCarousel from "@/components/home/BrandCarousel";
import CountriesServed from "@/components/home/CountriesSection";
import FAQ from "@/components/home/FAQSection";
import Hero from "@/components/home/Hero";
import OurProcess from "@/components/home/OurProcess";

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandCarousel />
      <CountriesServed />
      <OurProcess />
      <FAQ />
    </div>
  );
}