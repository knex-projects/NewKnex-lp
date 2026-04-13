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
    <section className="bg-BackGround min-h-[1006px] flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-20">
        <h2 className="text-4xl font-bold text-center font-quantico text-white">
          Entenda nosso <span className="text-G4">processo</span>
        </h2>

        <div className="relative flex flex-row gap-6 items-center justify-center">
          <div className="pointer-events-none absolute left-[242px] right-[242px] top-[24px] h-px border-b-6 border-solid border-P1 bg-P1" />



          {PROCESS_STEPS.map((step) => (
            <div key={step.id} className="flex flex-col items-center justify-center">
              <h1 className="relative z-10 text-4xl font-bold text-center font-quantico text-P5 bg-P1 rounded-full w-[56px] h-[56px] flex items-center justify-center mb-4">
                {step.id}
              </h1>
              <h2 className="text-[2rem] font-bold text-white font-quantico mb-10">
                {step.title}
              </h2>
              <div
                className="group flex flex-col items-center justify-start border-2 w-[464px] h-[478px] border-P3 bg-Footer hover:border-G3 transition-all duration-300 rounded-xl p-12 pt-8 gap-8"
              >
                <h2 className="text-[2rem] font-bold text-white font-quantico">
                  {step.cardTitle}
                </h2>
                <span>{step.icon}</span>
                <p className="text-white text-center font-montserrat font-300">
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
