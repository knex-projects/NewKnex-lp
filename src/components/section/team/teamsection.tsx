"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/src/components/ui";
import { TEAM_MEMBERS } from "./team.data";

const AUTO_ROTATE_MS = 2400;
const FALLBACK_TEAM_IMAGE = "/assets/icons/knex.svg";

export const TeamSection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [brokenImageKeys, setBrokenImageKeys] = useState<Set<string>>(
    () => new Set<string>(),
  );

  useEffect(() => {
    if (!carouselApi) return;

    const intervalId = window.setInterval(() => {
      carouselApi.scrollNext();
    }, AUTO_ROTATE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [carouselApi]);

  return (
    <section
      id="team"
      className="relative overflow-hidden px-6 pb-24 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36 xl:px-30"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto flex w-full max-w-[1920px] flex-col">
        <header className="animate-[portfolioReveal_820ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <h2
            id="team-heading"
            className="whitespace-nowrap text-center font-quantico text-[clamp(26px,7.5vw,32px)] font-bold leading-tight text-W6 sm:text-[40px] lg:text-[48px]"
          >
            Conheça a nossa <span className="text-G5">equipe</span>
          </h2>
        </header>

        <div className="animate-[portfolioReveal_980ms_cubic-bezier(0.22,1,0.36,1)_both] relative left-1/2 mt-10 w-[min(1916px,100vw)] -translate-x-1/2 sm:mt-14 sm:w-[min(1916px,calc(100vw-32px))] lg:mt-[84px]">
          <Carousel
            setApi={setCarouselApi}
            opts={{ align: "start", loop: true }}
            className="h-full w-full"
          >
            <CarouselContent className="-ml-2 h-full sm:-ml-10">
              {TEAM_MEMBERS.map((member, index) => {
                const itemKey = `${member.id}-${index}`;
                const shouldUseFallback =
                  !member.image || brokenImageKeys.has(itemKey);
                const imageSrc = shouldUseFallback
                  ? FALLBACK_TEAM_IMAGE
                  : member.image;

                return (
                  <CarouselItem
                    key={itemKey}
                    className="h-full basis-auto pl-2 sm:pl-10"
                  >
                    <article className={`group w-[160px] sm:w-[312px] `}>
                      <div className="relative h-[166px] w-[160px] overflow-hidden bg-B1 sm:h-[382px] sm:w-[312px]">
                        <Image
                          src={imageSrc}
                          alt={`Foto de ${member.name}`}
                          fill
                          loading="eager"
                          onError={() => {
                            if (shouldUseFallback) return;

                            setBrokenImageKeys((previous) => {
                              if (previous.has(itemKey)) return previous;

                              const next = new Set(previous);
                              next.add(itemKey);
                              return next;
                            });
                          }}
                          className="object-cover object-top  sm:object-center transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 639px) 160px, 312px"
                        />
                      </div>

                      <div className="pt-3 text-center sm:pt-5">
                        <h3 className="text-center font-montserrat text-[16px] font-bold leading-tight text-W6 sm:text-[24px]">
                          {member.name}
                        </h3>
                        <p className="mt-1 whitespace-pre-line text-center font-quantico text-[12px] font-normal leading-tight text-G5 sm:text-[16px]">
                          {member.role}
                        </p>
                      </div>
                    </article>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};