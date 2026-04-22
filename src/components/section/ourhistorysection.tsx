const TIMELINE_ITEMS = [
  {
    year: "2013",
    title: "Idealização",
    description:
      "Idealizada em 2013 por professores como Rodrigo e Dário.",
  },
  {
    year: "2024",
    title: "Prêmio NINHO 2024",
    description:
      "A Empresa Júnior foi destaque no evento Ninho, conquistando o prêmio de destaque. Também nos destacamos no CONFRONTE e federamo-nos à PB Júnior.",
  }
] as const;

export const OurHistorySection = () => {
  return (
    <section className="bg-BackGround py-16 lg:py-20">
      <div className="container mx-auto grid grid-cols-1 gap-14 px-4 lg:grid-cols-2 lg:items-start lg:gap-x-10 lg:gap-y-0 xl:gap-x-16">
        <div className="mx-auto w-full max-w-[625px] text-start lg:mx-0 lg:max-w-none lg:pr-2">
          <h2 className="mb-6 font-quantico text-2xl font-bold text-white sm:mb-8 sm:text-3xl lg:text-4xl">
            Nossa <span className="text-G4">história</span>
          </h2>

          <div className="flex flex-col gap-6 font-montserrat sm:text-[24px] font-light leading-relaxed text-white text-lg">
            <p>
              A Knex <strong className="font-semibold">nasceu</strong> em{" "}
              <strong className="font-semibold">2013</strong>, com o propósito de{" "}
              <strong className="font-semibold">revolucionar</strong> o mercado
              tecnológico no <strong className="font-semibold">sertão</strong>. Após
              um período de desafios e inatividade, a empresa foi{" "}
              <strong className="font-semibold">reerguida</strong> em{" "}
              <strong className="font-semibold">2021</strong>, consolidando-se em{" "}
              <strong className="font-semibold">2023</strong> com a abertura do{" "}
              <strong className="font-semibold">CNPJ</strong>.
            </p>

            <p>
              A virada decisiva veio em{" "}
              <strong className="font-semibold">2024</strong>, quando nos tornamos{" "}
              <strong className="font-semibold">destaque</strong>{" "}
              no <strong className="font-semibold">CONFRONTE</strong>,{" "}
              <strong className="font-semibold">conquistamos</strong> o{" "}
              <strong className="font-semibold">Prêmio Ninho</strong> e finalmente nos{" "}
              <strong className="font-semibold">federamos</strong> à{" "}
              <strong className="font-semibold">PB Júnior</strong>.
            </p>

            <p>
              Em <strong className="font-semibold">2025</strong>, coroamos nossa
              trajetória de sucesso sendo reconhecidos como{" "}
              <strong className="font-semibold">EJ Destaque</strong> no{" "}
              <strong className="font-semibold">CHAMA 25</strong> e{" "}
              <strong className="font-semibold">ENEJ 25</strong>, comprovando que a{" "}
              <strong className="font-semibold">persistência</strong> pode{" "}
              <strong className="font-semibold">transformar</strong> um sonho de{" "}
              <strong className="font-semibold">2013</strong> em uma realidade de{" "}
              <strong className="font-semibold">inovação</strong> e{" "}
              <strong className="font-semibold">impacto</strong> no{" "}
              <strong className="font-semibold">sertão paraibano</strong>.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none lg:pl-2">
          <div
            className="pointer-events-none absolute left-3.5 top-6 z-0 w-0.5 -translate-x-1/2 bg-G3 bottom-6 sm:left-4 sm:top-7 sm:bottom-7"
            aria-hidden
          />
          <ol className="relative z-10 list-none space-y-10 sm:space-y-12">
            {TIMELINE_ITEMS.map((item) => (
              <li key={`${item.year}-${item.title}`} className="flex gap-5 sm:gap-6">
                <div className="flex w-7 shrink-0 justify-center pt-1 lg:w-4 sm:pt-1.5">
                  <span
                    className="h-6 w-6 shrink-0 rounded-full bg-G4 ring-4 ring-BackGround sm:h-7 sm:w-7"
                    aria-hidden
                  />
                </div>
                <div className="min-w-0 flex-1 pb-1">
                  <span className="inline-block rounded-md bg-P1 px-2.5 py-1 font-montserrat text-[20px] font-medium text-P4 sm:text-[28px] md:px-2 md:py-0.5">
                    {item.year}
                  </span>
                  <h3 className="mt-2 font-quantico sm:text-[32px] font-bold text-G4 text-[24px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-prose font-montserrat sm:text-[24px] font-light leading-relaxed text-W5 text-[16px] md:leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
