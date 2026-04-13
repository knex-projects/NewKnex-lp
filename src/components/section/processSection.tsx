import { MailCheck, CodeXml, Rocket } from "lucide-react";

export const ProcessSection = () => {
  const PROCESS_STEPS = [
    {
      id: 1,
      cardTitle: "Primeiro Contato",
      description:
        "Tudo começa com o seu contato. Realizamos reuniões para compreender suas necessidades, definir objetivos e levantar requisitos técnicos e orçamentários. A partir disso, nossa equipe de desenvolvimento, transforma suas ideias em algo concreto e possível.",
      icon: (
        <MailCheck className="lg:w-24 lg:h-24 w-6 h-6 text-P3 group-hover:text-G3 transition-all duration-300" />
      ),
    },
    {
      id: 2,
      cardTitle: "Execução",
      description:
        "Chega o momento de dar vida à sua ideia. Desenvolvemos as primeiras versões do projeto e caminhamos junto com você, ouvindo suas percepções e sugestões. Cada feedback nos ajuda a ajustar o rumo até que o resultado esteja exatamente como você imaginou.",
      icon: (
        <CodeXml className="lg:w-24 lg:h-24 w-6 h-6 text-P3 group-hover:text-G3 transition-all duration-300" />
      ),
    },
    {
      id: 3,
      cardTitle: "Projeto no Ar",
      description:
        "Por último, você recebe o projeto pronto para o mundo. Nossa equipe garante que cada aspecto esteja ajustado e otimizado, com cada detalhe e alinhado às suas necessidades e expectativas.",
      icon: (
        <Rocket className="lg:w-24 lg:h-24 w-6 h-6 text-P3 group-hover:text-G3 transition-all duration-300" />
      ),
    },
  ];

  return (
    <section className="bg-BackGround flex flex-col items-center justify-center py-16 lg:min-h-[1006px] lg:py-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 px-4 lg:gap-20">
        <h2 className="text-3xl font-bold text-center font-quantico text-white sm:text-4xl">
          Entenda nosso <span className="text-G4">processo</span>
        </h2>

        <div className="relative flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:flex-nowrap lg:gap-3 2xl:gap-6">
          
          <div className="pointer-events-none absolute top-[24px] hidden h-px border-b-6 border-solid border-P1 bg-P1 lg:block lg:left-[200px] lg:right-[200px] xl:left-[300px] xl:right-[300px] 2xl:left-[242px] 2xl:right-[242px]" />

          {PROCESS_STEPS.map((step) => (
            <div
              key={step.id}
              className="flex flex-row lg:flex-col items-center justify-center gap-4"
            >
              {/* Número */}
              <h1 className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-P1 font-quantico text-2xl font-bold text-P5 sm:h-[56px] sm:w-[56px] sm:text-4xl">
                {step.id}
              </h1>

              {/* Card */}
              <div className="group flex w-full max-w-[464px] flex-col items-center justify-start gap-6 rounded-xl border-2 border-P3 bg-Footer p-6 transition-all duration-300 hover:border-G3 sm:p-8 md:h-[420px] md:w-[380px] md:max-w-[380px] md:gap-7 md:p-10 lg:h-[360px] lg:w-[300px] lg:max-w-[300px] lg:gap-4 lg:p-6 min-[1440px]:h-[450px] min-[1440px]:w-[430px] min-[1440px]:max-w-[430px] min-[1440px]:gap-8 min-[1440px]:p-10 2xl:h-[478px] 2xl:w-[464px] 2xl:max-w-[464px] 2xl:gap-8 2xl:p-12">
                
                {/* Title + Icon */}
                <div className="flex flex-row lg:flex-col items-center justify-start w-full gap-4 lg:justify-center">
                  <h2 className="font-quantico text-2xl font-bold text-white sm:text-[1.75rem] md:text-[1rem] lg:text-[1.55rem] 2xl:text-[2rem]">
                    {step.cardTitle}
                  </h2>

                  {step.icon}
                </div>

                {/* Description */}
                <p className="font-montserrat text-base font-light leading-relaxed text-white sm:text-[0.875rem] md:text-center lg:text-[0.82rem] lg:leading-snug 2xl:text-[1rem] 2xl:leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};