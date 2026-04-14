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
  return (
    <article className="group relative h-[284px] overflow-hidden">
      <Image
        src={project.logo}
        alt={`Projeto ${project.title}`}
        fill
        className="object-cover transition-[filter] duration-500 group-hover:blur-[2px]"
        sizes="(max-width: 767px) 86vw, (max-width: 1279px) 44vw, 464px"
      />

      <div className="pointer-events-none absolute inset-0 bg-transparent opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute inset-0 z-10 flex translate-y-3 flex-col items-start justify-end p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <h3
          className={`font-quantico text-[28px] font-bold leading-[1.1] ${project.darkTextOnHover ? "text-B1" : "text-W6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"}`}
        >
          {project.title}
        </h3>

        <p
          className={`mt-[6px] font-montserrat text-[16px] font-bold uppercase leading-[1.1] tracking-wide ${project.darkTextOnHover ? "text-B2" : "text-W5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"}`}
        >
          {project.subtitle}
        </p>

        <a
          href={project.href}
          className="pointer-events-auto mt-6 inline-flex h-[44px] w-[117px] items-center justify-center gap-1 rounded-md bg-G2 font-montserrat text-[20px] font-bold leading-none text-p6 transition-colors duration-300 hover:bg-G5"
        >
          <span>Visitar</span>
          <ArrowRight className="size-4" strokeWidth={3} aria-hidden />
        </a>
      </div>
    </article>
  );
};
