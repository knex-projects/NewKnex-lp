import logoKnex from "@/public/assets/logo/logo-knex.svg"
import { instagramIcon, linkedinIcon, whatsAppIcon } from "@/public/assets"
import Image from "next/image"
import Link from "next/link"
import { IconButton } from "../../ui"

export default function Footer() {
    return (
        <footer className="p-6.5 pb-17 bg-Footer font-[Montserrat] text-W2 md:pt-30 lg:px-10 xl:px-[12.5%]">
            <div className="flex flex-col md:flex-row md:justify-between">
                <Image
                    src={logoKnex}
                    alt="Logo da Knex"
                    className="mx-auto md:mx-0 md:mb-auto lg:w-57 md:w-45"
                />

                <div className="md:flex md:flex-row 2xl:gap-18 lg:gap-12 md:gap-3.75">
                    <div className="md:w-55.5">
                        <h3 className="my-6 text-xl font-bold text-white lg:text-2xl">Contato</h3>
                        <ul className="lg:text-lg">
                            <li className="mb-4 ">org.knex@gmail.com</li>
                            <a href="https://wa.me/558388488786?text=Ol%C3%A1!%0AGostaria%20de%20agendar%20uma%20reuni%C3%A3o." target="_blank" className=" ">(83) 8848-8786</a>
                            <a href="https://wa.me/558388488786?text=Ol%C3%A1!%0AGostaria%20de%20agendar%20uma%20reuni%C3%A3o." target="_blank" className=" fixed bottom-10 z-50 w-15 h-15 right-[5%] ">  <Image
                                src={whatsAppIcon}
                                alt="Logo da Knex"
                                width={15}
                                height={15}
                                className="mx-auto md:mx-0 brightness-0 transition-all duration-300 hover:brightness-100 hover:invert-0 invert md:mb-auto md:w-15   w-[40px]"
                            /></a>
                            <li className="mt-4">Rua Alfredo Lustosa Cabral, SN , Salgadinho - Patos/PB </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="my-6 text-xl font-bold text-white lg:text-2xl">Conteúdo</h3>
                        <ul className="lg:text-lg">
                            <li className="mb-4 ">
                                <Link href="/contatos" >Entrar em contato</Link>
                            </li>
                            <li className="mb-4 ">
                                <Link href="/" >Home</Link>
                            </li>
                            <li className="mb-4 ">
                                <Link href="/sobre" >Sobre</Link>
                            </li>
                            <li className="">
                                <Link href="/faq" >Faq</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="my-6 text-xl font-bold text-nowrap text-white lg:text-2xl">Redes Sociais</h3>
                        <ul className="flex gap-7 md:gap-4">
                            <li>
                                <a href="https://www.instagram.com/knexjr?igsh=MTIweDlyMmx5Y2Q4bA==" target="_blank" rel="noopener noreferrer">
                                    <IconButton src={instagramIcon} label="ìcone do Instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/knex-consultoria-jr/" target="_blank" rel="noopener noreferrer">
                                    <IconButton src={linkedinIcon} label="Ícone do LinkedIn" />
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/558388488786?text=Ol%C3%A1!%0AGostaria%20de%20agendar%20uma%20reuni%C3%A3o." target="_blank" className="">  
                                <IconButton src={whatsAppIcon} label="Ícone do LinkedIn" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="mt-27.5 text-xs text-center text-W4 md:text-start md:text-lg">Todos os direitos reservados. © Knex Consultoria.</p>
        </footer>
    )
}