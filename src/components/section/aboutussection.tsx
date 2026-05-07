import { teamKnex } from "@/public/assets"

import Image from "next/image"

export const AboutUsSection = () => {
    return  (
        <section id="aboutussection" className="flex flex-col justify-center gap-11.5 p-6.5 lg:px-10 xl:px-[12.5%] md:py-22 md:flex-row md:justify-between md:gap-6.75">
            <div className="contents md:flex md:flex-col md:justify-center md:gap-10 md:w-156.25 md:min-w-90">
                <h2 className="order-1 font-quantico font-bold text-[32px] md:text-[40px] lg:text-[48px]">Conheça mais sobre a Knex</h2>
                <p className="order-3 font-montserrat text-W3 md:text-[20px] md:leading-9 lg:text-2xl">Na Knex, Empresa Júnior de Computação da Universidade Estadual da Paraíba (UEPB), aplicamos o conhecimento de ponta da universidade para resolver os desafios reais dos nossos clientes. Nossa equipe de futuros especialistas desenvolve projetos e consultorias que aliam inovação, qualidade e visão fresca para o crescimento sustentável do seu negócio.</p>
            </div>

            <div className="order-2 flex flex-col items-center gap-4 md:justify-center md:order-3">
                <Image
                    src={ teamKnex }
                    alt="Foto da equipe"
                    width={ 705 }
                    height={ 597 }
                    className="w-78.75 rounded-lg md:w-176.25 md:min-w-78.75"
                />
                <p className="font-montserrat text-B2 md:text-2xl">Foto da equipe </p>
            </div>
        </section>
    )
}