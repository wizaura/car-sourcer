
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BrandButton from "@/components/ui/BrandButton";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Our Cars", href: "#inventory" },
  { label: "Process", href: "#process" },
  { label: "About Us", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-300 ease-out",
        scrolled
          ? "border-b border-[#e8dcd6]/80 bg-[#faf5f2]/95 shadow-[0_4px_24px_rgba(35,24,17,0.05)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3.5 transition-all duration-300 sm:px-10 lg:px-14 lg:py-5">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Car Sourcer home"
          onClick={() => setMenuOpen(false)}
          className="group relative z-50 flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#ff4d12] text-white transition-transform duration-300 group-hover:rotate-[-5deg] sm:h-10 sm:w-10">
            <ArrowUpRight size={25} strokeWidth={2.4} />
          </span>

          <span className="text-lg font-semibold tracking-[-0.06em] sm:text-xl">
            CAR<span className="text-[#ff4d12]">SOURCER</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-sm font-medium text-[#27231f] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#ff4d12] after:transition-all after:duration-300 hover:text-[#ff4d12] hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <BrandButton
            href="/contact"
            variant="orange"
            size="md"
            className="rounded-xl"
          >
            Source Your Car
          </BrandButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-[#e8dcd6] bg-white/80 text-[#171614] transition-colors hover:border-[#ff4d12] md:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "fixed inset-0 z-40 bg-[#faf5f2] px-6 pb-10 pt-28 md:hidden",
          "transition-all duration-300",
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className="flex items-center justify-between border-b border-[#e8dcd6] py-5 text-2xl font-medium tracking-tight"
            >
              <span className="text-black">{item.label}</span>
              <span className="text-[#ff4d12]">
                <ArrowUpRight size={22} />
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <BrandButton
            href="/contact"
            size="lg"
            className="w-full"
          >
            Source Your Car
          </BrandButton>
        </div>

        <p className="mt-8 text-xs tracking-[0.16em] text-[#796a63]">
          DUBAI, UAE · SOURCING BUILT AROUND YOU
        </p>
      </div>
    </header>
  );
}