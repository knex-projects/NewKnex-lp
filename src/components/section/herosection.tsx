import {
  StatCard,
  IconButton,
  CyclingText,
  PrimaryButton,
  StatCardProps,
} from "@/src/components/ui";

import Image from "next/image";
import { ShieldCheck, Star, BanknoteArrowUp } from "lucide-react";
import { knexIcon, instagramIcon, linkedinIcon } from "@/public/assets";

const STAT_CARDS: StatCardProps[] = [
  {
    title: "Projetos concluídos",
    value: "+10",
    Icon: ShieldCheck,
  },
  {
    title: "FeedBack de clientes",
    value: "5/5",
    Icon: Star,
  },
  {
    title: "Receita Gerada",
    value: "+50.000",
    Icon: BanknoteArrowUp,
  },
];

const PRODUCTS = [
  {
    id: "landing-page",
    title: "Landing Page",
  },
  {
    id: "website",
    title: "Refatoração de Sites",
  },
  {
    id: "mobile-app",
    title: "Aplicações Mobile",
  },
  {
    id: "web-application",
    title: "Aplicações Web",
  },
];

export const HeroSection = () => {
  return (
    <section>
      <div className="w-full flex items-center justify-between xl:px-[12.5%] py-30 px-10 flex-col lg:flex-row">
        <div className="flex flex-col items-start justify-center sm:gap-10 gap-2 lg:mb-0 mb-12">
          <span className="flex flex-col items-start justify-center gap-10 lg:mb-0 mb-12 lg:h-auto h-[100px]">
            <h1 className="max-w-xl font-quantico text-3xl font-bold leading-tight text-W6 sm:text-4xl lg:text-5xl min-w">
              SOMOS UMA EMPRESA QUE DESENVOLVE{" "}
              <span className="text-G5 uppercase">
                <CyclingText
                  text_list={PRODUCTS.map((product) => product.title)}
                  interval={2500}
                />
              </span>
            </h1>
          </span>

          <p className="max-w-3xl font-montserrat text-base font-light text-W2 sm:text-lg md:text-xl lg:text-xl">
            Somos uma empresa Júnior focada no desenvolvimento de web software.
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12 sm:mt-0 mt-10">
            <PrimaryButton>Entrar em Contato</PrimaryButton>
            <span className="flex flex-row items-center justify-center gap-4 sm:gap-6">
              <a href="https://www.instagram.com/knexjr?igsh=MTIweDlyMmx5Y2Q4bA==" target="_blank" rel="noopener noreferrer">
                <IconButton src={instagramIcon} label="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/knex-consultoria-jr/" target="_blank" rel="noopener noreferrer">
                <IconButton src={linkedinIcon} label="LinkedIn" />
              </a>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative h-auto w-full">
            <div className="pointer-events-none absolute top-[15%] left-[-10%] animate-[moveDiagonal_8s_ease-in-out_infinite]">
              <div className="size-50 rounded-full bg-[radial-gradient(circle,var(--color-G5)_0%,transparent_50%)] blur-xl mix-blend-screen animate-pulse" />
            </div>

            <div className="pointer-events-none absolute bottom-[15%] right-[-10%] animate-[moveDiagonalReverse_8s_ease-in-out_infinite]">
              <div className="size-50 rounded-full bg-[radial-gradient(circle,var(--color-P5)_0%,transparent_50%)] blur-xl mix-blend-screen animate-pulse" />
            </div>

            <Image
              className="relative h-auto w-full mix-blend-color-dodge"
              src={knexIcon}
              alt="Knex Consultoria Júnior"
              width={500}
              height={500}
              priority
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 500px"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row flex-wrap items-center justify-between max-sm:gap-8  xl:px-[12.5%] pb-30 px-10">
        {STAT_CARDS.map(({ title, value, Icon }) => (
          <StatCard key={title} title={title} value={value} Icon={Icon} />
        ))}
      </div>
    </section>
  );
};
