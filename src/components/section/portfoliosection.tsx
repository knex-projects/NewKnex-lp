"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselNavButton,
  PortfolioProjectCard,
  PortfolioProjectCardData,
} from "@/src/components/ui";
import {
  portfolioEventFlowLogo,
  portfolioViisercompLogo,
  portfolioGrDesignLogo,
  portfolioIrisComunicaLogo,
} from "@/public/assets";

const PORTFOLIO_PROJECTS: PortfolioProjectCardData[] = [
  {
    id: "viisercomp",
    title: "VII Sercomp",
    subtitle: "Web - LP",
    logo: portfolioViisercompLogo,
    href: "#",
  },
  {
    id: "eventflow",
    title: "Eventflow",
    subtitle: "Gestão de eventos",
    logo: portfolioEventFlowLogo,
    href: "#",
  },
  {
    id: "gr-design",
    title: "Gleidson design",
    subtitle: "Web - LP",
    logo: portfolioGrDesignLogo,
    href: "#",
    darkTextOnHover: true,
  },
  {
    id: "iris-comunica",
    title: "Íris",
    subtitle: "Web - LP",
    logo: portfolioIrisComunicaLogo,
    href: "#",
  },
];

const AUTO_ROTATE_MS = 5200;

export const PortfolioSection = () => {
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

    const intervalId = window.setInterval(() => {
      goToNext();
    }, AUTO_ROTATE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [carouselApi, goToNext, isPaused]);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden px-6 pb-24 sm:px-10 sm:pb-28 lg:px-16 xl:px-30 lg:pb-36"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto flex w-full max-w-[1700px] flex-col">
        <header className="animate-[portfolioReveal_820ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <h2
            id="portfolio-heading"
            className="font-quantico text-4xl leading-tight text-W6 sm:text-5xl lg:text-[48px] xl:pl-32"
          >
            Confira nosso <span className="text-G5">portfólio</span>
          </h2>
        </header>

        <div
          className="animate-[portfolioReveal_980ms_cubic-bezier(0.22,1,0.36,1)_both] mx-auto mt-10 w-[1664px] max-w-full sm:mt-14 lg:mt-[84px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="flex h-auto items-center sm:h-[284px]">
            <CarouselNavButton
              direction="previous"
              ariaLabel="Mostrar projeto anterior"
              onClick={goToPrevious}
              className="hidden sm:grid"
            />

            <div className="h-[220px] w-full overflow-hidden sm:mx-6 sm:h-full lg:mx-[52px] lg:w-[1440px] lg:max-w-[calc(100%-224px)]">
              <Carousel
                setApi={setCarouselApi}
                opts={{ align: "start", loop: true }}
                className="h-full w-full"
              >
                <CarouselContent className="h-full gap-4 sm:gap-6">
                  {PORTFOLIO_PROJECTS.map((project) => (
                    <CarouselItem
                      key={project.id}
                      className="h-full basis-full sm:basis-[calc((100%-24px)/2)] lg:basis-auto lg:w-[464px]"
                    >
                      <PortfolioProjectCard project={project} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <CarouselNavButton
              direction="next"
              ariaLabel="Mostrar próximo projeto"
              onClick={goToNext}
              className="hidden sm:grid"
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 sm:hidden">
            <CarouselNavButton
              direction="previous"
              ariaLabel="Mostrar projeto anterior"
              onClick={goToPrevious}
              className="size-[52px]"
            />
            <CarouselNavButton
              direction="next"
              ariaLabel="Mostrar próximo projeto"
              onClick={goToNext}
              className="size-[52px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
