import { Laptop, Speech, Smartphone } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "../ui"
import { ElementType } from "react";


export const ServicesSection = () => {
    interface ServicesSectionProps {
        icon: ElementType;
        title: string;
        text: string;
    }

    const servicesCards: ServicesSectionProps[] = [
        {
            icon: Laptop,
            title: "Desenvolvimento Web",
            text: "Desenvolvemos sites e sistemas web modernos, responsivos e seguros, projetados para oferecer a melhor experiência ao usuário e destacar sua marca no ambiente digital."
        },
        {
            icon: Speech,
            title: "Consultoria",
            text: "Oferecemos consultoria especializada em tecnologia e inovação, ajudando sua empresa a identificar oportunidades, otimizar processos e alcançar resultados mais estratégicos."
        },
        {
            icon: Smartphone,
            title: "Aplicações Mobile",
            text: "Criamos aplicativos personalizados para Android e iOS, combinando design intuitivo e alto desempenho para conectar sua empresa ao público de forma prática e eficiente."
        }
    ]
    
    return (
        <section id="services" className="flex flex-col gap-10 p-6 pb-24 px-0 animate-[portfolioReveal_820ms_cubic-bezier(0.22,1,0.36,1)_both] xl:px-60 lg:px-10 md:p-6 md:pt-30 md:pb-60">
            <h2 className="mx-6 font-[Quantico] text-[32px] font-bold sm:text-[40px] md:mx-0 lg:text-[48px]">
                Alguns dos nossos principais
                <span className="text-G5"> serviços</span>
                .
            </h2>
            <Carousel
                className="w-full max-w-360 h-auto md:h-117"
                opts={{
                        align: "center",
                        loop: false
                    }}
            >
                <CarouselContent className="h-full gap-4 px-6 md:px-0">
                    { servicesCards.map(({ icon: Icon, title, text }, index) => (
                        <CarouselItem
                            key={ index }
                            className="group basis-auto w-90 pt-14 pr-9.25 pb-15.75 pl-14 bg-Footer border border-P3 rounded-lg transition-all ease-in-out duration-300 hover:border-G2 hover:shadow-lg hover:shadow-[#00FF734D] md:w-116 md:pt-19.25 md:pr-5.75 md:pb-23.25"
                        >
                            <div className="flex flex-col gap-8 h-full">
                                <div className="flex items-center gap-4.25">
                                    <Icon className="w-16 h-16 text-P4 transition-all ease-in-out duration-300 group-hover:text-G4 md:w-18 md:h-18" />
                                    <h3 className="w-46 font-[Montserrat] text-xl font-bold text-W5 md:max-w-73 md:text-[28px]">{ title }</h3>
                                </div>
                                <p className="font-[Montserrat] text-lg text-W3 md:text-2xl">{ text }</p>
                            </div>
                        </CarouselItem>
                    )) }
                </CarouselContent>
            </Carousel>
        </section>
    )
}