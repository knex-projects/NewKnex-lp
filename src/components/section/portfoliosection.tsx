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
const INFINITE_PORTFOLIO_PROJECTS = PORTFOLIO_PROJECTS.concat(PORTFOLIO_PROJECTS);

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
      className="relative overflow-hidden px-6 pb-24 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36 xl:px-[5%] "
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto flex w-full max-w-[1700px] flex-col">
        <header className="animate-[portfolioReveal_820ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <h2
            id="portfolio-heading"
            className="whitespace-nowrap text-center font-quantico text-[clamp(26px,7.5vw,32px)] font-bold leading-tight text-W6 sm:text-left sm:text-[40px] lg:text-[48px] xl:pl-32"
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
          <div className="flex items-start sm:h-[282px] sm:items-center">
            <CarouselNavButton
              direction="previous"
              ariaLabel="Mostrar projeto anterior"
              onClick={goToPrevious}
              className="mt-[76px] !size-[40px] sm:mt-0 sm:!size-[60px]"
            />

            <div className="w-full overflow-hidden sm:mx-6 sm:h-full lg:mx-[52px] lg:max-w-[calc(100%-224px)]">
              <Carousel
                setApi={setCarouselApi}
                opts={{ align: "start", loop: true }}
                className="h-full w-full"
              >
                <CarouselContent className="-ml-4 h-full sm:-ml-6">
                  {INFINITE_PORTFOLIO_PROJECTS.map((project, index) => (
                    <CarouselItem
                      key={`${project.id}-${index}`}
                      className="h-full basis-full pl-4 sm:basis-1/2 sm:pl-6 lg:basis-auto"
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
              className="mt-[76px] !size-[40px] sm:mt-0 sm:!size-[60px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
