import { MailCheck, CodeXml, Rocket } from "lucide-react";

export const ProcessSection = () => {
  const PROCESS_STEPS = [
    {
      id: 1,
      title: "Contato",
      description:
        "Tudo começa com o seu contato. Realizamos reuniões para compreender suas necessidades, definir objetivos e levantar requisitos técnicos e orçamentários. A partir disso, nossa equipe de desenvolvimento, transforma suas ideias em algo concreto e possível.",
      icon: <MailCheck size={96} className="text-P3 group-hover:text-G3 transition-all duration-300" />,
    },
    {
      id: 2,
      title: "Desenvolvimento",
      description:
        "Chega o momento de dar vida à sua ideia. Desenvolvemos as primeiras versões do projeto e caminhamos junto com você, ouvindo suas percepções e sugestões. Cada feedback nos ajuda a ajustar o rumo até que o resultado esteja exatamente como você imaginou.",
      icon: <CodeXml size={96} className="text-P3 group-hover:text-G3 transition-all duration-300" />,
    },
    {
      id: 3,
      title: "Entrega",
      description:
        "Por último, você recebe o projeto pronto para o mundo. Nossa equipe garante que cada aspecto esteja ajustado e otimizado, com cada detalhe e alinhado às suas necessidades e expectativas.",
      icon: <Rocket size={96} className="text-P3 group-hover:text-G3 transition-all duration-300" />,
    },
  ];

  return (
    <section className="bg-BackGround min-h-[1006px]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center font-quantico text-white">
          Entenda nosso <span className="text-G4">processo</span>
        </h2>

        <div className="flex flex-row gap-6 items-center justify-center">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.id}
              className="group flex flex-col items-center justify-center border-2 w-[464px] h-[478px] border-P3 bg-Footer hover:border-G3 transition-all duration-300 rounded-xl p-12 pt-8 gap-8"
            >
              <h2 className="text-[2rem] font-bold text-white font-quantico">{step.title}</h2>
              <span>{step.icon}</span>
              <p className="text-white text-center font-montserrat text-[1.25rem]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
