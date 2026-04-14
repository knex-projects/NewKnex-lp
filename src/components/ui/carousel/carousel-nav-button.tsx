"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

type CarouselNavButtonProps = Readonly<
  {
    direction: "previous" | "next";
    ariaLabel: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

export const CarouselNavButton = ({
  direction,
  ariaLabel,
  className = "",
  type = "button",
  ...rest
}: CarouselNavButtonProps) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={`grid size-[60px] shrink-0 place-items-center rounded-full border-[3px] border-G5 bg-transparent text-G5 transition-all duration-300 hover:bg-G5 hover:text-p6 focus-visible:bg-G5 focus-visible:text-p6 focus-visible:outline-none ${className}`}
      {...rest}
    >
      {direction === "previous" ? (
        <ArrowLeft className="size-6" aria-hidden />
      ) : (
        <ArrowRight className="size-6" aria-hidden />
      )}
    </button>
  );
};
