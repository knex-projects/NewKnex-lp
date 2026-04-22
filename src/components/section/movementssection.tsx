import Image from "next/image";
import { pbJuniorLogo, brasilJuniorLogo } from "@/public/assets";

export const MovementsSection = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full p-6.5 lg:px-10 xl:px-60 md:py-22 bg-BackGround">
      <div className="flex w-full flex-col gap-5 lg:gap-[120px]">
        <h2 className="font-quantico font-bold text-W0 text-[32px] md:text-[40px] lg:text-[48px] leading-tight max-w-[800px] text-left">
          Movimentos e Programas Júniores dos quais a Knex Participa
        </h2>
        <div className="flex flex-col gap-5 lg:gap-[120px] w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-[120px]">
            <h3 className="lg:hidden w-full font-quantico text-[32px] font-bold text-[var(--color-W6)] text-left">
              PB júnior
            </h3>
            <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-[254px] h-[103px] lg:w-[494px] lg:h-[205px]">
                <Image 
                  src={pbJuniorLogo} 
                  alt="PB Júnior" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full lg:w-1/2 text-left">
              <h3 className="hidden lg:block font-quantico text-[32px] font-bold text-[var(--color-W6)]">
                PB júnior
              </h3>
              <p className="font-montserrat text-[16px] lg:text-[18px] font-normal text-[var(--color-W4)] leading-relaxed">
                É a federação que reúne todas as empresas juniores da paraíba, conectando os EJs do sertão até o mar através conexões, eventos e formações, além de auxiliar toda a rede na construção e no gerenciamento de suas EJs em conjunto com o MEJ.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-5 lg:gap-[120px]">
            <h3 className="lg:hidden w-full font-quantico text-[32px] font-bold text-[var(--color-W6)] text-left">
              Movimento empresa júnior
            </h3>
            <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-[294px] h-[104px] lg:w-[489px] lg:h-[213px]">
                <Image 
                  src={brasilJuniorLogo} 
                  alt="Brasil Júnior" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full lg:w-1/2 text-left">
              <h3 className="hidden lg:block font-quantico text-[32px] font-bold text-[var(--color-W6)]">
                Movimento empresa júnior
              </h3>
              <p className="font-montserrat text-[16px] lg:text-[18px] font-normal text-[var(--color-W4)] leading-relaxed">
                O Movimento Empresa Júnior (MEJ) é a maior rede de jovens empreendedores do Brasil, formada por estudantes de graduação que criam e gerenciam suas próprias organizações dentro das universidades. Mais do que um projeto acadêmico, o MEJ é um ecossistema de aprendizado, inovação e impacto real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
