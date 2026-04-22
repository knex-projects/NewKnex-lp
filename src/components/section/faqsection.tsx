"use client";

import { useState } from "react";
import Image from "next/image";
import { faqDesktopOpenIcon, faqMobileOpenIcon, faqMobileClosedIcon } from "@/public/assets";
export const FAQSection = () => {
  const faqs = [
    {
      question: "Quem somos?",
      answer:
        "Somos uma empresa formada por estudantes universitários dedicados e com experiência no mercado de trabalho. Nosso objetivo é desenvolver soluções tecnológicas que gerem resultados reais para o seu negócio, unindo inovação, qualidade e preço justo.",
    },
    {
      question: "Quais são nossos diferenciais?",
      answer:
        "Nossa equipe participa constantemente de treinamentos e palestras para se manter atualizada. Além disso, somos uma empresa sem fins lucrativos, conseguimos oferecer preços até 60% mais baixos que o mercado, sem abrir mão da qualidade e da agilidade na entrega",
    },
    {
      question: "Quais áreas atendemos?",
      answer:
        "Atendemos empresas e empreendedores de diferentes segmentos, de qualquer lugar do Brasil. Nosso foco é impulsionar negócios que desejam fortalecer sua presença digital e alcançar novos resultados.",
    },
    {
      question: "Quais serviços oferecemos?",
      answer:
        "Desenvolvemos sites profissionais, realizamos manutenção e reformulação de páginas, e oferecemos soluções que mantêm seu site moderno, estável e adaptado aos padrões atuais de design e responsividade.",
    },
    {
      question: "O serviço é personalizado?",
      answer:
        "Sim! Cada projeto é desenvolvido de forma personalizada, levando em conta as necessidades, metas e identidade de cada cliente.",
    },
    {
      question: "Há custos adicionais?",
      answer:
        "Não há custos ocultos. Todos os valores são combinados previamente, de forma transparente.",
    },
    {
      question: "Como posso falar com o time?",
      answer:
        "Você pode entrar em contato diretamente com nossa equipe pelos nossos canais oficiais (site, WhatsApp, e-mail, ou redes sociais). Teremos prazer em entender seu projeto e te ajudar a tirar suas ideias do papel.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="flex-1 w-full bg-[var(--color-BackGround)] flex flex-col items-center pt-16 pb-[150px] px-6">
      <div className="w-full max-w-[1440px] flex flex-col gap-[80px] items-center lg:items-start">
        <h1 className="font-quantico font-bold text-[32px] lg:text-[48px] text-[var(--color-W6)] text-center lg:text-left w-full">
          Perguntas Frequentes
        </h1>

        <div className="flex flex-col items-center lg:items-start w-full lg:max-w-[1440px] lg:max-h-[1449px]">
          {faqs.map((faq, index) => {
            const isAlternate = index % 2 !== 0;
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className={`w-[360px] lg:w-full lg:max-w-[1440px] flex flex-col lg:gap-[8px] justify-center rounded-[8px] ${
                  isAlternate ? "bg-[var(--color-BackGround)]" : "bg-[var(--color-P1)]"
                }`}
              >
                <div 
                  className="h-[96px] lg:h-[118px] px-[24px] flex justify-between items-center w-full cursor-pointer lg:cursor-default"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <h3 className="font-montserrat font-semibold text-[18px] lg:text-[24px] text-[var(--color-P5)]">
                    {faq.question}
                  </h3>
                  
                  {/* Desktop Icon (Always Open) */}
                  <div className="hidden lg:block relative">
                    <Image src={faqDesktopOpenIcon} alt="Abrir" width={34} height={46} />
                  </div>
                  
                  {/* Mobile Icon (Animated crossfade) */}
                  <div className="relative w-[34px] h-[43px] flex items-center justify-center lg:hidden">
                    {/* Open SVG */}
                    <Image 
                      src={faqMobileOpenIcon}
                      alt="Fechar"
                      width={34} height={43}
                      className={`absolute transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
                    />

                    {/* Closed SVG */}
                    <Image 
                      src={faqMobileClosedIcon}
                      alt="Abrir"
                      width={34} height={38}
                      className={`absolute transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                    />
                  </div>
                </div>
                
                {/* Animated Accordion Body */}
                <div 
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out w-full lg:grid-rows-[1fr] lg:opacity-100 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex items-start px-[24px] pb-[20px]">
                      <p className="font-montserrat font-normal text-[18px] lg:text-[24px] text-[var(--color-W4)] leading-snug">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
