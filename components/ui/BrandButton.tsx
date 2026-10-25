
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import type { ReactNode } from "react";

type BrandButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "orange" | "dark" | "light" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  arrow?: "right" | "diagonal";
};

const variants = {
  orange: {
    button:
      "bg-[#ff4d12] text-white border border-[#ff4d12] hover:bg-[#eb420b] hover:border-[#eb420b]",
    tile: "bg-white text-[#ff4d12]",
    glow: "group-hover:shadow-[0_10px_35px_rgba(255,77,18,0.3)]",
  },
  dark: {
    button:
      "bg-[#171614] text-white border border-[#171614] hover:bg-[#292723]",
    tile: "bg-[#ff4d12] text-white",
    glow: "group-hover:shadow-[0_10px_30px_rgba(23,22,20,0.2)]",
  },
  light: {
    button:
      "bg-white text-[#171614] border border-white hover:bg-[#fff0e9]",
    tile: "bg-[#ff4d12] text-white",
    glow: "group-hover:shadow-[0_10px_30px_rgba(255,77,18,0.12)]",
  },
  outline: {
    button:
      "bg-transparent text-[#171614] border border-[#d9cbc3] hover:border-[#ff4d12] hover:bg-white",
    tile: "bg-[#ff4d12] text-white",
    glow: "group-hover:shadow-[0_8px_25px_rgba(255,77,18,0.1)]",
  },
};

const sizes = {
  sm: {
    button: "min-h-10 gap-3 pl-3 pr-1",
    text: "text-xs",
    tile: "h-8 w-8 rounded-md",
    icon: 16,
  },
  md: {
    button: "min-h-12 gap-4 pl-4 pr-1.5",
    text: "text-sm",
    tile: "h-9 w-9 rounded-lg",
    icon: 18,
  },
  lg: {
    button:
      "min-h-12 gap-3 pl-4 pr-1.5 sm:min-h-14 sm:gap-5 sm:pl-5 sm:pr-1.5",
    text: "text-sm sm:text-base",
    tile: "h-9 w-9 rounded-lg sm:h-11 sm:w-11",
    icon: 20,
  },
};

export default function BrandButton({
  href,
  children,
  variant = "orange",
  size = "md",
  className = "",
  arrow = "right",
}: BrandButtonProps) {
  const style = variants[variant];
  const dimension = sizes[size];
  const Arrow = arrow === "diagonal" ? ArrowUpRight : ArrowRight;

  return (
    <Link
      href={href}
      className={[
        "group relative isolate inline-flex items-center justify-between",
        "overflow-hidden rounded-xl font-semibold",
        "transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out",
        "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d12] focus-visible:ring-offset-4",
        style.button,
        style.glow,
        dimension.button,
        className,
      ].join(" ")}
    >
      {/* Diagonal light sweep */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-[80%] z-0 w-1/2 -skew-x-[22deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[360%]"
      />

      {/* Button label */}
      <span className={["relative z-10 whitespace-nowrap", dimension.text].join(" ")}>
        {children}
      </span>

      {/* Signature arrow tile */}
      <span
        className={[
          "relative z-10 flex shrink-0 items-center justify-center",
          "overflow-hidden transition-colors duration-300",
          dimension.tile,
          style.tile,
        ].join(" ")}
      >
        <Arrow
          size={dimension.icon}
          strokeWidth={2.2}
          className={[
            "transition-transform duration-300 ease-out",
            "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          ].join(" ")}
        />
      </span>
    </Link>
  );
}