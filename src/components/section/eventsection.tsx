"use client";

import { useCallback, useEffect, useState } from "react";
import { EventHoverCard, EventItem } from "../ui/event-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselNavButton,
} from "@/src/components/ui";

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
      className="bg-BackGround px-4 py-16 sm:px-6 sm:py-20 px-10"
      aria-labelledby="eventos-heading"
    >
      <div className="mx-auto flex w-full max-w-[1700px] flex-col">
        <h2
          id="eventos-heading"
          className="text-center font-quantico text-[32px] font-bold text-W6 lg:text-[48px]"
        >
          Eventos que nós participamos
        </h2>

        <div
          className="mx-auto mt-10 w-[1664px] max-w-full sm:mt-14 lg:mt-[84px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="flex items-start sm:h-[282px] sm:items-center">
            <CarouselNavButton
              direction="previous"
              ariaLabel="Evento anterior"
              onClick={goToPrevious}
              className="mt-[76px] !size-[40px] sm:mt-0 sm:!size-[60px] hidden sm:block"
            />

            <div className="w-full overflow-hidden sm:mx-6 sm:h-full lg:mx-[52px] lg:max-w-[calc(100%-224px)]">
              <Carousel
                setApi={setCarouselApi}
                opts={{ align: "start", loop: true }}
                className="h-full w-full"
              >
                <CarouselContent className="-ml-4 h-full sm:-ml-6">
                  {LOOP_ITEMS.map((item, index) => (
                    <CarouselItem
                      key={`${item.id}-${index}`}
                      className="h-full basis-full pl-4 sm:basis-1/2 sm:pl-6 lg:basis-auto"
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
              className="mt-[76px] !size-[40px] sm:mt-0 sm:!size-[60px] hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
