"use client";

import { useState } from "react";

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
                  <div className="hidden lg:block">
                    <svg width="34" height="46" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.176 29.952C10.192 29.952 8.688 29.4507 7.664 28.448C6.64 27.4667 6.128 26.0587 6.128 24.224V18.432C6.128 17.92 6 17.5467 5.744 17.312C5.488 17.056 5.14667 16.928 4.72 16.928H3.664V13.024H4.72C5.14667 13.024 5.488 12.896 5.744 12.64C6 12.384 6.128 12.0107 6.128 11.52V5.728C6.128 3.872 6.64 2.45334 7.664 1.472C8.688 0.490669 10.192 1.90735e-06 12.176 1.90735e-06H14.032V3.904H13.456C12.688 3.904 12.1013 4.10667 11.696 4.512C11.312 4.91734 11.12 5.504 11.12 6.272V11.392C11.12 12.3307 10.992 13.0667 10.736 13.6C10.48 14.1333 10.0747 14.5173 9.52 14.752C8.98667 14.9867 8.29333 15.1573 7.44 15.264V14.688C8.29333 14.7733 8.98667 14.944 9.52 15.2C10.0747 15.4347 10.48 15.8187 10.736 16.352C10.992 16.8853 11.12 17.6213 11.12 18.56V23.68C11.12 24.448 11.312 25.0347 11.696 25.44C12.1013 25.8453 12.688 26.048 13.456 26.048H14.032V29.952H12.176Z" fill="#A56FEE"/>
                      <path d="M21.824 45.952C23.808 45.952 25.312 45.4507 26.336 44.448C27.36 43.4667 27.872 42.0587 27.872 40.224V34.432C27.872 33.92 28 33.5467 28.256 33.312C28.512 33.056 28.8533 32.928 29.28 32.928H30.336V29.024H29.28C28.8533 29.024 28.512 28.896 28.256 28.64C28 28.384 27.872 28.0107 27.872 27.52V21.728C27.872 19.872 27.36 18.4533 26.336 17.472C25.312 16.4907 23.808 16 21.824 16H19.968V19.904H20.544C21.312 19.904 21.8987 20.1067 22.304 20.512C22.688 20.9173 22.88 21.504 22.88 22.272V27.392C22.88 28.3307 23.008 29.0667 23.264 29.6C23.52 30.1333 23.9253 30.5173 24.48 30.752C25.0133 30.9867 25.7067 31.1573 26.56 31.264V30.688C25.7067 30.7733 25.0133 30.944 24.48 31.2C23.9253 31.4347 23.52 31.8187 23.264 32.352C23.008 32.8853 22.88 33.6213 22.88 34.56V39.68C22.88 40.448 22.688 41.0347 22.304 41.44C21.8987 41.8453 21.312 42.048 20.544 42.048H19.968V45.952H21.824Z" fill="#A56FEE"/>
                    </svg>
                  </div>
                  
                  {/* Mobile Icon (Animated crossfade) */}
                  <div className="relative w-[34px] h-[43px] flex items-center justify-center lg:hidden">
                    {/* Open SVG */}
                    <svg 
                      className={`absolute transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
                      width="34" height="43" viewBox="0 0 34 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.632 22.464C8.144 22.464 7.016 22.088 6.248 21.336C5.48 20.6 5.096 19.544 5.096 18.168V13.824C5.096 13.44 5 13.16 4.808 12.984C4.616 12.792 4.36 12.696 4.04 12.696H3.248V9.76798H4.04C4.36 9.76798 4.616 9.67198 4.808 9.47998C5 9.28798 5.096 9.00798 5.096 8.63998V4.29598C5.096 2.90398 5.48 1.83998 6.248 1.10398C7.016 0.367982 8.144 -1.7643e-05 9.632 -1.7643e-05H11.024V2.92798H10.592C10.016 2.92798 9.576 3.07998 9.272 3.38398C8.984 3.68798 8.84 4.12798 8.84 4.70398V8.54398C8.84 9.24798 8.744 9.79998 8.552 10.2C8.36 10.6 8.056 10.888 7.64 11.064C7.24 11.24 6.72 11.368 6.08 11.448V11.016C6.72 11.08 7.24 11.208 7.64 11.4C8.056 11.576 8.36 11.864 8.552 12.264C8.744 12.664 8.84 13.216 8.84 13.92V17.76C8.84 18.336 8.984 18.776 9.272 19.08C9.576 19.384 10.016 19.536 10.592 19.536H11.024V22.464H9.632Z" fill="#A56FEE"/>
                      <path d="M18.368 36.964C19.856 36.964 20.984 36.588 21.752 35.836C22.52 35.1 22.904 34.044 22.904 32.668V28.324C22.904 27.94 23 27.66 23.192 27.484C23.384 27.292 23.64 27.196 23.96 27.196H24.752V24.268H23.96C23.64 24.268 23.384 24.172 23.192 23.98C23 23.788 22.904 23.508 22.904 23.14V18.796C22.904 17.404 22.52 16.34 21.752 15.604C20.984 14.868 19.856 14.5 18.368 14.5H16.976V17.428H17.408C17.984 17.428 18.424 17.58 18.728 17.884C19.016 18.188 19.16 18.628 19.16 19.204V23.044C19.16 23.748 19.256 24.3 19.448 24.7C19.64 25.1 19.944 25.388 20.36 25.564C20.76 25.74 21.28 25.868 21.92 25.948V25.516C21.28 25.58 20.76 25.708 20.36 25.9C19.944 26.076 19.64 26.364 19.448 26.764C19.256 27.164 19.16 27.716 19.16 28.42V32.26C19.16 32.836 19.016 33.276 18.728 33.58C18.424 33.884 17.984 34.036 17.408 34.036H16.976V36.964H18.368Z" fill="#A56FEE"/>
                    </svg>

                    {/* Closed SVG */}
                    <svg 
                      className={`absolute transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                      width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.632 24.156C11.144 24.156 10.016 23.78 9.248 23.028C8.48 22.292 8.096 21.236 8.096 19.86V15.516C8.096 15.132 8 14.852 7.808 14.676C7.616 14.484 7.36 14.388 7.04 14.388H6.248V11.46H7.04C7.36 11.46 7.616 11.364 7.808 11.172C8 10.98 8.096 10.7 8.096 10.332V5.988C8.096 4.596 8.48 3.532 9.248 2.796C10.016 2.06 11.144 1.692 12.632 1.692H14.024V4.62H13.592C13.016 4.62 12.576 4.772 12.272 5.076C11.984 5.38 11.84 5.82 11.84 6.396V10.236C11.84 10.94 11.744 11.492 11.552 11.892C11.36 12.292 11.056 12.58 10.64 12.756C10.24 12.932 9.72 13.06 9.08 13.14V12.708C9.72 12.772 10.24 12.9 10.64 13.092C11.056 13.268 11.36 13.556 11.552 13.956C11.744 14.356 11.84 14.908 11.84 15.612V19.452C11.84 20.028 11.984 20.468 12.272 20.772C12.576 21.076 13.016 21.228 13.592 21.228H14.024V24.156H12.632Z" fill="#402761"/>
                      <path d="M21.368 24.156C22.856 24.156 23.984 23.78 24.752 23.028C25.52 22.292 25.904 21.236 25.904 19.86V15.516C25.904 15.132 26 14.852 26.192 14.676C26.384 14.484 26.64 14.388 26.96 14.388H27.752V11.46H26.96C26.64 11.46 26.384 11.364 26.192 11.172C26 10.98 25.904 10.7 25.904 10.332V5.988C25.904 4.596 25.52 3.532 24.752 2.796C23.984 2.06 22.856 1.692 21.368 1.692H19.976V4.62H20.408C20.984 4.62 21.424 4.772 21.728 5.076C22.016 5.38 22.16 5.82 22.16 6.396V10.236C22.16 10.94 22.256 11.492 22.448 11.892C22.64 12.292 22.944 12.58 23.36 12.756C23.76 12.932 24.28 13.06 24.92 13.14V12.708C24.28 12.772 23.76 12.9 23.36 13.092C22.944 13.268 22.64 13.556 22.448 13.956C22.256 14.356 22.16 14.908 22.16 15.612V19.452C22.16 20.028 22.016 20.468 21.728 20.772C21.424 21.076 20.984 21.228 20.408 21.228H19.976V24.156H21.368Z" fill="#402761"/>
                    </svg>
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
