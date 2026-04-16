"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export type PortfolioProjectCardData = Readonly<{
  id: string;
  title: string;
  subtitle: string;
  logo: string;
  href: string;
  darkTextOnHover?: boolean;
}>;

type PortfolioProjectCardProps = Readonly<{
  project: PortfolioProjectCardData;
}>;

export const PortfolioProjectCard = ({ project }: PortfolioProjectCardProps) => {
  const shouldLoadEagerly = project.id === "eventflow";

  return (
    <>
      <article className="mx-auto flex w-full max-w-[232px] flex-col sm:hidden">
        <div className="relative h-[192px] w-[232px] overflow-hidden rounded-[8px] bg-B1">
          <Image
            src={project.logo}
            alt={`Projeto ${project.title}`}
            fill
            loading={shouldLoadEagerly ? "eager" : "lazy"}
            className="object-cover"
            sizes="232px"
          />
        </div>

        <div className="pt-5 text-center">
          <h3 className="font-quantico text-[22px] font-bold leading-tight text-W6">
            {project.title}
          </h3>

          <p className="mt-2 font-montserrat text-[14px] font-normal uppercase leading-tight tracking-wide text-W5">
            {project.subtitle}
          </p>

          <a
            href={project.href}
            className="mt-4 inline-flex h-[25px] w-[104px] items-center justify-center gap-1 rounded-[2px] bg-G2 font-montserrat text-[14px] font-bold leading-none text-p6 transition-colors duration-300"
          >
            <span>Visitar</span>
            <ArrowRight className="size-[14px]" strokeWidth={3} aria-hidden />
          </a>
        </div>
      </article>

      <article className="group relative mx-auto hidden h-[282px] w-full overflow-hidden rounded-[8px] sm:block lg:w-[464px]">
        <Image
          src={project.logo}
          alt={`Projeto ${project.title}`}
          fill
          loading={shouldLoadEagerly ? "eager" : "lazy"}
          className="object-cover transition-[filter] duration-500 md:group-hover:blur-[2px]"
          sizes="(max-width: 1279px) 44vw, 464px"
        />

        <div className="pointer-events-none absolute inset-0 bg-transparent opacity-100 backdrop-blur-[2px] transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />

        <div className="absolute inset-0 z-10 flex translate-y-0 flex-col items-start justify-end p-4 opacity-100 transition-all duration-500 sm:p-6 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <h3
            className={`font-quantico text-[24px] font-bold leading-[1.1] sm:text-[28px] ${project.darkTextOnHover ? "text-B1" : "text-W6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"}`}
          >
            {project.title}
          </h3>

          <p
            className={`mt-[6px] font-montserrat text-[14px] font-bold uppercase leading-[1.1] tracking-wide sm:text-[16px] ${project.darkTextOnHover ? "text-B2" : "text-W5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"}`}
          >
            {project.subtitle}
          </p>

          <a
            href={project.href}
            className="pointer-events-auto mt-4 inline-flex h-10 w-[108px] items-center justify-center gap-1 rounded-[2px] bg-G2 font-montserrat text-[18px] font-bold leading-none text-p6 transition-colors duration-300 hover:bg-G5 sm:mt-6 sm:h-[44px] sm:w-[117px] sm:text-[20px]"
          >
            <span>Visitar</span>
            <ArrowRight className="size-4" strokeWidth={3} aria-hidden />
          </a>
        </div>
      </article>
    </>
  );
};
