"use client";

import type { CSSProperties } from "react";
import {
  useLayoutEffect,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";

export type CyclingTextProps = Readonly<{
  text_list: string[];
  interval?: number;
}>;

export function CyclingText({ text_list, interval = 2500 }: CyclingTextProps) {
  const len = text_list.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1 % (len || 1));
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentRef = useRef<HTMLSpanElement>(null);
  const nextRef = useRef<HTMLSpanElement>(null);

  const [currentHeight, setCurrentHeight] = useState(0);
  const [nextHeight, setNextHeight] = useState(0);

  const measure = useCallback(() => {
    const hCurrent = currentRef.current?.getBoundingClientRect().height ?? 0;
    const hNext = nextRef.current?.getBoundingClientRect().height ?? 0;
    if (hCurrent > 0) setCurrentHeight(hCurrent);
    if (hNext > 0) setNextHeight(hNext);
  }, []);

  useLayoutEffect(() => {
    const ro = new ResizeObserver(measure);
    if (currentRef.current) ro.observe(currentRef.current);
    if (nextRef.current) ro.observe(nextRef.current);
    queueMicrotask(measure);
    return () => ro.disconnect();
  }, [measure, currentIndex, nextIndex]);

  useEffect(() => {
    if (len <= 1) return;

    const TRANSITION_DURATION = 450;

    const loop = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex((c) => {
          const newCurrent = (c + 1) % len;
          setNextIndex((newCurrent + 1) % len);
          return newCurrent;
        });
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    }, interval);

    return () => clearInterval(loop);
  }, [interval, len]);

  const viewportHeight = isTransitioning ? nextHeight : currentHeight;

  const viewportStyle: CSSProperties = {
    height: viewportHeight > 0 ? `${viewportHeight}px` : "auto",
    "--item-h": `${currentHeight}px`,
    transition: isTransitioning
      ? `height 450ms ease-in-out`
      : "none",
  } as CSSProperties;

  if (len === 0) return null;

  if (len === 1) {
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
        className={
          isTransitioning
            ? "flex flex-col translate-y-[calc(-1*var(--item-h))] transition-transform duration-450 ease-in-out"
            : "flex flex-col translate-y-0 transition-none"
        }
      >
        <span ref={currentRef} className="block">
          {text_list[currentIndex]}
        </span>
        <span ref={nextRef} className="block">
          {text_list[nextIndex]}
        </span>
      </span>
    </span>
  );
}