"use client";

import { ArrowUpRight } from "lucide-react";

export default function BackToTop() {
    return (
        <button
            type="button"
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
            className="group inline-flex items-center gap-2 text-xs text-white/60 transition-colors hover:text-white"
        >
            Back to top
            <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
        </button>
    );
}