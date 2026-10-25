
"use client";

import Image from "next/image";

const brands = [
  { name: "Mercedes-Benz", src: "/images/brands/mercedes-benz-logo.svg", width: 44 },
  { name: "BMW", src: "/images/brands/bmw-logo.svg", width: 44 },
  { name: "Porsche", src: "/images/brands/porsche-logo.svg", width: 100 },
  { name: "Land Rover", src: "/images/brands/land-rover-logo.svg", width: 100 },
  { name: "Audi", src: "/images/brands/audi-logo.svg", width: 78 },
  { name: "Toyota", src: "/images/brands/toyota-logo.svg", width: 90 },
  { name: "Bentley", src: "/images/brands/bentley-logo.svg", width: 68 },
];

export default function BrandCarousel() {
  return (
    <section className="overflow-hidden bg-[#faf5f2] pb-12 pt-2 sm:pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-6 border-t border-[#e8dcd6] pt-6 sm:flex-row sm:items-center sm:gap-12 sm:pt-8">
          <p className="max-w-[240px] shrink-0 text-sm leading-6 text-[#796a63]">
            Sourcing vehicles from the world's leading automotive brands.
          </p>

          <div className="relative min-w-0 flex-1 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#faf5f2] to-transparent sm:w-12" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#faf5f2] to-transparent sm:w-12" />

            <div className="brand-marquee flex w-max items-center gap-10 sm:gap-14">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  title={brand.name}
                  className="group flex h-14 shrink-0 items-center justify-center sm:h-16"
                  style={{ width: brand.width }}
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={brand.width}
                    height={44}
                    className="max-h-9 w-full object-contain opacity-65 transition duration-300 group-hover:scale-105 group-hover:opacity-100 sm:max-h-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}