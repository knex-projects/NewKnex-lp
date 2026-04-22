"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselNavButton,
} from "@/src/components/ui";

export type EventItem = {
  id: string;
  title: string;
  year: string;
  img_logo: string;
  img_bg: string;
  logoImgClassName?: string;
};

const EVENT_ITEMS: EventItem[] = [
  {
    id: "chama",
    title: "CHAMA",
    year: "2024",
    img_logo: "/assets/logos/chama-logo.png",
    img_bg: "/assets/photos/chama-bg.png",
    logoImgClassName: "brightness-0 invert",
  },
  {
    id: "enej",
    title: "ENEJ",
    year: "2024",
    img_logo: "/assets/logos/enej-logo.png",
    img_bg: "/assets/photos/enej-bg.png",
  },
  {
    id: "confronte",
    title: "CONFRONTE",
    year: "2024",
    img_logo: "/assets/logos/confronte-logo.png",
    img_bg: "/assets/photos/confronte-bg.png",
    logoImgClassName: "brightness-0 invert",
  },
  {
    id: "neon",
    title: "NEON",
    year: "2024",
    img_logo: "/assets/logos/neon-logo.png",
    img_bg: "/assets/photos/neon-bg.png",
  },
];

function EventHoverCard({ item }: { readonly item: EventItem }) {
  return (
    <div className="group relative h-44 w-full overflow-hidden rounded-xl shadow-sm sm:h-52">
      <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
        <Image
          src={item.img_bg}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 90vw, 360px"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-G5/50 from-5% via-G5/15 via-28% to-transparent to-58%"
          aria-hidden
        />
        <div className="absolute bottom-3 left-3 z-10 max-w-[90%] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:bottom-4 sm:left-4">
          <p className="font-quantico text-lg font-bold text-white sm:text-xl">
            {item.title}
          </p>
          <p className="font-montserrat text-sm font-light text-white/90">
            {item.year}
          </p>
        </div>
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center bg-P3 px-5 transition-opacity duration-300 ease-out group-hover:opacity-0 sm:px-8">
        <Image
          src={item.img_logo}
          alt={item.title}
          width={240}
          height={120}
          unoptimized
          sizes="240px"
          className={`h-auto max-h-18 w-auto max-w-[90%] object-contain sm:max-h-21 ${item.logoImgClassName ?? ""}`}
        />
      </div>
    </div>
  );
}

const AUTO_ROTATE_MS = 5200;
const LOOP_ITEMS = EVENT_ITEMS.concat(EVENT_ITEMS);

export const EventSection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    carouselApi?.scrollNext();
  }, [carouselApi]);

  const goToPrevious = useCallback(() => {
    carouselApi?.scrollPrev();
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi || isPaused) return;

    const intervalId = globalThis.setInterval(() => {
      goToNext();
    }, AUTO_ROTATE_MS);

    return () => {
      globalThis.clearInterval(intervalId);
    };
  }, [carouselApi, goToNext, isPaused]);

  return (
    <section
      id="eventos"
      className="bg-BackGround px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="eventos-heading"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col">
        <h2
          id="eventos-heading"
          className="text-center font-quantico text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
        >
          Eventos que <span className="text-G5">nós participamos</span>
        </h2>

        <div
          className="mx-auto mt-10 w-full max-w-[1100px] sm:mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <CarouselNavButton
              direction="previous"
              ariaLabel="Evento anterior"
              onClick={goToPrevious}
              className="!size-11 shrink-0 border-2 sm:!size-12 md:!size-14"
            />

            <div className="min-w-0 flex-1 overflow-hidden">
              <Carousel
                setApi={setCarouselApi}
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <CarouselContent className="-ml-3 sm:-ml-4 md:-ml-5">
                  {LOOP_ITEMS.map((item, index) => (
                    <CarouselItem
                      key={`${item.id}-${index}`}
                      className="basis-[88%] pl-3 sm:basis-1/2 sm:pl-4 md:basis-1/3 md:pl-5"
                    >
                      <EventHoverCard item={item} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <CarouselNavButton
              direction="next"
              ariaLabel="Próximo evento"
              onClick={goToNext}
              className="!size-11 shrink-0 border-2 sm:!size-12 md:!size-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
