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
        <MailCheck
          size={96}
          className="text-P3 group-hover:text-G3 transition-all duration-300"
        />
      ),
    },
    {
      id: 2,
      title: "Desenvolvimento",
      cardTitle: "Execução",
      description:
        "Chega o momento de dar vida à sua ideia. Desenvolvemos as primeiras versões do projeto e caminhamos junto com você, ouvindo suas percepções e sugestões. Cada feedback nos ajuda a ajustar o rumo até que o resultado esteja exatamente como você imaginou.",
      icon: (
        <CodeXml
          size={96}
          className="text-P3 group-hover:text-G3 transition-all duration-300"
        />
      ),
    },
    {
      id: 3,
      title: "Entrega",
      cardTitle: "Projeto no Ar",
      description:
        "Por último, você recebe o projeto pronto para o mundo. Nossa equipe garante que cada aspecto esteja ajustado e otimizado, com cada detalhe e alinhado às suas necessidades e expectativas.",
      icon: (
        <Rocket
          size={96}
          className="text-P3 group-hover:text-G3 transition-all duration-300"
        />
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
            <div key={step.id} className="flex flex-col items-center justify-center">
              <h1 className="relative z-10 mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-P1 font-quantico text-2xl font-bold text-P5 sm:mb-4 sm:h-[56px] sm:w-[56px] sm:text-4xl">
                {step.id}
              </h1>
              <h2 className="mb-6 text-2xl font-bold text-white font-quantico sm:mb-10 sm:text-[2rem]">
                {step.title}
              </h2>
              <div
                className="group flex w-full max-w-[464px] flex-col items-center justify-start gap-6 rounded-xl border-2 border-P3 bg-Footer p-6 pt-6 hover:border-G3 sm:p-8 sm:pt-7 md:h-[420px] md:w-[380px] md:max-w-[380px] md:gap-7 md:p-10 md:pt-7 lg:h-[360px] lg:w-[300px] lg:max-w-[300px] lg:gap-4 lg:p-6 lg:pt-5 min-[1440px]:h-[450px] min-[1440px]:w-[430px] min-[1440px]:max-w-[430px] min-[1440px]:gap-8 min-[1440px]:p-10 min-[1440px]:pt-8 2xl:h-[478px] 2xl:w-[464px] 2xl:max-w-[464px] 2xl:gap-8 2xl:p-12 2xl:pt-8"
              >
                <h2 className="font-quantico text-2xl font-bold text-white sm:text-[1.75rem] md:text-[2rem] lg:text-[1.55rem] 2xl:text-[2rem]">
                  {step.cardTitle}
                </h2>
                <span>{step.icon}</span>
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
