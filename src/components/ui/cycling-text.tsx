"use client";

import type { CSSProperties, TransitionEvent } from "react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export type CyclingTextProps = Readonly<{
  text_list: string[];
  interval?: number;
}>;

export function CyclingText({ text_list, interval = 2500 }: CyclingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentRef = useRef<HTMLSpanElement>(null);
  const nextRef = useRef<HTMLSpanElement>(null);
  const [slotHeight, setSlotHeight] = useState(0);

  const nextIndex =
    text_list.length > 0 ? (currentIndex + 1) % text_list.length : 0;

  const measure = useCallback(() => {
    const h1 = currentRef.current?.getBoundingClientRect().height ?? 0;
    const h2 = nextRef.current?.getBoundingClientRect().height ?? 0;
    const next = Math.max(h1, h2);
    if (next > 0) setSlotHeight(next);
  }, []);

  useLayoutEffect(() => {
    const ro = new ResizeObserver(measure);
    const a = currentRef.current;
    const b = nextRef.current;
    if (a) ro.observe(a);
    if (b) ro.observe(b);
    queueMicrotask(measure);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    if (text_list.length <= 1) return;
    const timer = setInterval(() => {
      setIsTransitioning(true);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, text_list.length]);

  function handleTransitionEnd(e: TransitionEvent<HTMLSpanElement>) {
    if (e.propertyName !== "transform") return;
    setIsTransitioning(false);
    setCurrentIndex((prev) => (prev + 1) % text_list.length);
  }

  const viewportStyle = {
    ...(slotHeight > 0 ? { height: `${slotHeight}px` } : {}),
    "--item-h": `${slotHeight}px`,
  } as CSSProperties;

  const slotStyle =
    slotHeight > 0 ? ({ minHeight: `${slotHeight}px` } as CSSProperties) : undefined;

  if (text_list.length === 0) return null;

  if (text_list.length === 1) {
    return (
      <span className="inline-block max-w-full min-w-0 align-bottom wrap-break-word uppercase text-G5">
        {text_list[0]}
      </span>
    );
  }

  return (
    <span
      className="relative inline-block max-w-full min-w-0 overflow-hidden align-bottom wrap-break-word uppercase text-G5"
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
        <span ref={currentRef} className="block" style={slotStyle}>
          {text_list[currentIndex]}
        </span>
        <span ref={nextRef} className="block" style={slotStyle}>
          {text_list[nextIndex]}
        </span>
      </span>
    </span>
  );
}
