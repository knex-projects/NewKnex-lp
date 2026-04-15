"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/src/components/ui";
import { TEAM_MEMBERS } from "./team.data";

const AUTO_ROTATE_MS = 2400;
const FALLBACK_TEAM_IMAGE = "/assets/icons/knex.svg";
const INFINITE_TEAM_MEMBERS = TEAM_MEMBERS.concat(TEAM_MEMBERS);

export const TeamSection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

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
      <div className="mx-auto flex w-full max-w-[1700px] flex-col">
        <header className="animate-[portfolioReveal_820ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <h2
            id="team-heading"
            className="text-center font-quantico text-[34px] font-bold leading-tight text-W6 sm:text-[40px] lg:text-[48px]"
          >
            Conheça a nossa <span className="text-G5">equipe</span>
          </h2>
        </header>

        <div className="animate-[portfolioReveal_980ms_cubic-bezier(0.22,1,0.36,1)_both] mx-auto mt-10 w-[1664px] max-w-full sm:mt-14 lg:mt-[84px]">
          <Carousel
            setApi={setCarouselApi}
            opts={{ align: "start", loop: true }}
            className="h-full w-full"
          >
            <CarouselContent className="-ml-4 h-full sm:-ml-6">
              {INFINITE_TEAM_MEMBERS.map((member, index) => (
                <CarouselItem
                  key={`${member.id}-${index}`}
                  className="h-full basis-[88%] pl-4 sm:basis-[312px] sm:pl-6"
                >
                  <article className="group w-full">
                    <div className="relative aspect-[312/382] w-full overflow-hidden bg-B1">
                      <Image
                        src={member.image || FALLBACK_TEAM_IMAGE}
                        alt={`Foto de ${member.name}`}
                        fill
                        loading={index === 0 ? "eager" : "lazy"}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 639px) 88vw, 312px"
                      />
                    </div>

                    <div className="pt-4 text-center sm:pt-5">
                      <h3 className="text-center font-montserrat text-[20px] font-bold leading-tight text-W6 sm:text-[24px]">
                        {member.name}
                      </h3>
                      <p className="mt-1 whitespace-pre-line text-center font-quantico text-[14px] font-normal leading-tight text-G5 sm:text-[16px]">
                        {member.role}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};