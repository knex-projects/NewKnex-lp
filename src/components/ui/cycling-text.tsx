"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

export type CyclingTextProps = Readonly<{
  text_list: string[];
  interval?: number;
}>;

export function CyclingText({ text_list, interval = 2500 }: CyclingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemRef = useRef<HTMLSpanElement>(null);
  const [itemHeight, setItemHeight] = useState(0);

  useEffect(() => {
    if (itemRef.current) {
      setItemHeight(itemRef.current.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  function handleTransitionEnd() {
    setIsTransitioning(false);
    setCurrentIndex((prev) => (prev + 1) % text_list.length);
  }

  const nextIndex = (currentIndex + 1) % text_list.length;

  const viewportStyle = {
    ...(itemHeight > 0 ? { height: `${itemHeight}px` } : {}),
    "--item-h": `${itemHeight}px`,
  } as CSSProperties;

  return (
    <span
      className="relative inline-block h-[1.2em] overflow-hidden align-bottom uppercase text-G5"
      style={viewportStyle}
    >
      <span
        onTransitionEnd={handleTransitionEnd}
        className={
          isTransitioning
            ? "flex flex-col translate-y-[calc(-1*var(--item-h))] transition-transform duration-450 ease-in-out"
            : "flex flex-col translate-y-0 transition-none"
        }
      >
        <span ref={itemRef} className="block whitespace-nowrap">
          {text_list[currentIndex]}
        </span>
        <span className="block whitespace-nowrap">{text_list[nextIndex]}</span>
      </span>
    </span>
  );
}
