
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type BrandButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "orange" | "dark" | "light" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  arrow?: "right" | "diagonal" | "none";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
};

const variants = {
  orange: {
    button:
      "bg-[#ff4d12] text-white border border-[#ff4d12] hover:bg-[#eb420b] hover:border-[#eb420b]",
    tile: "bg-white text-[#ff4d12]",
    glow: "group-hover:shadow-[0_10px_35px_rgba(255,77,18,0.3)]",
    shine: "via-white/25",
  },
  dark: {
    button:
      "bg-[#171614] text-white border border-[#171614] hover:bg-[#292723]",
    tile: "bg-[#ff4d12] text-white",
    glow: "group-hover:shadow-[0_10px_30px_rgba(23,22,20,0.2)]",
    shine: "via-white/20",
  },
  light: {
    button:
      "bg-white text-[#171614] border border-white hover:bg-[#fff0e9] hover:border-[#ff4d12]/30",
    tile: "bg-[#fff0e9] text-[#ff4d12] group-hover:bg-[#ff4d12] group-hover:text-white",
    glow: "group-hover:shadow-[0_10px_30px_rgba(255,77,18,0.14)]",
    shine: "via-[#ff4d12]/10",
  },
  outline: {
    button:
      "bg-transparent text-[#171614] border border-[#d9cbc3] hover:border-[#ff4d12] hover:bg-white",
    tile: "bg-transparent text-[#ff4d12] border border-[#eadbd3] group-hover:bg-[#ff4d12] group-hover:border-[#ff4d12] group-hover:text-white",
    glow: "group-hover:shadow-[0_8px_25px_rgba(255,77,18,0.12)]",
    shine: "via-[#ff4d12]/10",
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
  type = "button",
  disabled = false,
}: BrandButtonProps) {
  const style = variants[variant];
  const dimension = sizes[size];

  const baseClass = [
    "group relative isolate inline-flex w-fit items-center justify-between",
    "overflow-hidden rounded-xl font-semibold",
    "transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d12] focus-visible:ring-offset-4",
    style.button,
    style.glow,
    dimension.button,
    className,
  ].join(" ");

  const Arrow =
    arrow === "diagonal" ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      {/* Animated shine */}
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-y-0 -left-[80%] z-0 w-1/2 -skew-x-[22deg]",
          "bg-gradient-to-r from-transparent",
          style.shine,
          "to-transparent transition-transform duration-700 ease-out",
          "group-hover:translate-x-[360%]",
        ].join(" ")}
      />

      {/* Button label */}
      <span
        className={[
          "relative z-10 whitespace-nowrap",
          dimension.text,
        ].join(" ")}
      >
        {children}
      </span>

      {/* Arrow tile */}
      {arrow !== "none" && (
        <span
          className={[
            "relative z-10 flex shrink-0 items-center justify-center",
            "overflow-hidden transition-all duration-300 ease-out",
            dimension.tile,
            style.tile,
          ].join(" ")}
        >
          <Arrow
            size={dimension.icon}
            strokeWidth={2.2}
            className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={disabled ? "#" : href}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        className={[
          baseClass,
          disabled
            ? "pointer-events-none cursor-not-allowed opacity-60"
            : "cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        ].join(" ")}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={[
        baseClass,
        disabled
          ? "cursor-not-allowed opacity-60"
          : "cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
      ].join(" ")}
    >
      {content}
    </button>
  );
}