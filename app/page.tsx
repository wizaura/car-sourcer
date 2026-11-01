import BrandCarousel from "@/components/home/BrandCarousel";
import CountriesServed from "@/components/home/CountriesSection";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandCarousel />
      <CountriesServed />
    </div>
  );
}