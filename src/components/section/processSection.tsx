import { MailCheck, CodeXml, Rocket } from "lucide-react";

export const ProcessSection = () => {
  const PROCESS_STEPS = [
    {
      id: 1,
      title: "Contato",
      cardTitle: "Primeiro Contato",
      description:
        "Tudo começa com o seu contato. Realizamos reuniões para compreender suas necessidades, definir objetivos e levantar requisitos técnicos e orçamentários. A partir disso, nossa equipe de desenvolvimento, transforma suas ideias em algo concreto e possível.",
      icon: (
        <MailCheck className="w-6 h-6 lg:w-24 lg:h-24 text-P3 group-hover:text-G3 transition-all duration-300" />
      ),
    },
    {
      id: 2,
      title: "Desenvolvimento",
      cardTitle: "Execução",
      description:
        "Chega o momento de dar vida à sua ideia. Desenvolvemos as primeiras versões do projeto e caminhamos junto com você, ouvindo suas percepções e sugestões. Cada feedback nos ajuda a ajustar o rumo até que o resultado esteja exatamente como você imaginou.",
      icon: (
        <CodeXml className="w-6 h-6 lg:w-24 lg:h-24 text-P3 group-hover:text-G3 transition-all duration-300" />
      ),
    },
    {
      id: 3,
      title: "Finalização",
      cardTitle: "Projeto no Ar",
      description:
        "Por último, você recebe o projeto pronto para o mundo. Nossa equipe garante que cada aspecto esteja ajustado e otimizado, com cada detalhe e alinhado às suas necessidades e expectativas.",
      icon: (
        <Rocket className="w-6 h-6 lg:w-24 lg:h-24 text-P3 group-hover:text-G3 transition-all duration-300" />
      ),
    },
  ];

  return (
    <section className="bg-BackGround flex flex-col items-center justify-center py-16 lg:min-h-[1006px] lg:py-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 px-4 lg:gap-20">
        
        <h2 className="text-[32px] sm:text-[56px] text-start font-bold lg:text-center font-quantico text-white">
          Entenda nosso <span className="text-G4">processo</span>
        </h2>

        <div className="relative flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:flex-nowrap lg:gap-3 2xl:gap-6">

          <div className="pointer-events-none absolute top-[24px] hidden h-px border-b-6 border-solid border-P1 bg-P1 
            lg:block lg:left-[170px] lg:right-[170px] xl:left-[200px] xl:right-[200px] 2xl:left-[242px] 2xl:right-[242px]
            z-0"
          />

          {PROCESS_STEPS.map((step, index) => {
            const isFirst = index === 0;
            const isLast = index === PROCESS_STEPS.length - 1;
            let lineEdges = "-top-10 -bottom-10";
            if (isFirst) lineEdges = "top-1/2 -bottom-10";
            if (isLast) lineEdges = "-top-10 bottom-1/2";

            return (
            <div
              key={step.id}
              className="relative flex flex-row lg:flex-col items-center justify-center gap-4 w-full max-w-[500px]"
            >
              <div
                className={`pointer-events-none absolute z-0 w-1 bg-P1 lg:hidden left-5 sm:left-6 md:left-6 ${lineEdges}`}
                aria-hidden
              />
              <h1 className="relative z-10 flex shrink-0 items-center justify-center rounded-full bg-P1 text-P5 font-bold font-quantico
                w-10 h-10 text-xl
                lg:ring-12 ring-4 ring-P1
                sm:w-12 sm:h-12 sm:text-2xl
                lg:w-[48px] lg:h-[48px] lg:text-[48px]">
                {step.id}
              </h1>

              <h2 className="mb-6 text-[32px] font-bold text-white font-quantico 
              sm:mb-10  2xl:text-[48px] 
              lg:block hidden">
                {step.title}
              </h2>

              <div className="relative z-10 group flex flex-col items-center justify-start
                gap-4 sm:gap-5
                rounded-xl border-2 border-P3 bg-BackGround lg:bg-Footer
                p-4 sm:p-6
                transition-all duration-300 hover:border-G3
                
                h-fit

                lg:w-[300px] lg:max-w-[300px] lg:h-[400px]
                xl:w-[400px] xl:max-w-[400px] xl:h-[400px]
                2xl:w-[464px] 2xl:max-w-[464px] 2xl:h-[478px]">

                <div className="flex flex-col items-center justify-start w-full gap-2 lg:gap-6 lg:justify-center">
                  <span className="flex w-full flex-row items-center justify-start gap-2 lg:gap-6 lg:flex-col lg:justify-center">

                  <h2 className="font-quantico text-white
                    md:text-[20px] 
                    lg:text-[1.50rem] lg:font-bold
                    xl:text-[1.75rem] xl:font-bold
                    2xl:text-[2rem] font-bold">
                    {step.cardTitle}
                  </h2>
                  {step.icon}
                      </span>

                <p className="font-montserrat font-light text-white text-start
                  text-[12px]
                  leading-relaxed
                  lg:text-[0.82rem] lg:leading-snug lg:text-center
                  xl:text-[1rem] 2xl:leading-relaxed">
                  {step.description}
                </p>
                    </div>
              </div>
            </div>
          ); })}
        </div>
      </div>
    </section>
  );
};