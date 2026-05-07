import logoKnex from "@/public/assets/logo/logo-knex.svg"
import { instagramIcon, linkedinIcon  } from "@/public/assets"
import Image from "next/image"
import Link from "next/link"
import { IconButton } from "../../ui"

export default function Footer() {
    return(
        <footer className="p-6.5 pb-17 bg-Footer font-[Montserrat] text-W2 md:pt-30 lg:px-10 xl:px-[12.5%]">
            <div className="flex flex-col md:flex-row md:justify-between">
                <Image
                    src={ logoKnex }
                    alt="Logo da Knex"
                    className="mx-auto md:mx-0 md:mb-auto lg:w-57 md:w-45"
                />
                
                <div className="md:flex md:flex-row 2xl:gap-18 lg:gap-12 md:gap-3.75">
                    <div className="md:w-55.5">
                        <h3 className="my-6 text-xl font-bold text-white lg:text-2xl">Contato</h3>
                        <ul className="lg:text-lg">
                            <li className="mb-4 ">knex@contato.com</li>
                            <li className="mb-4 ">(00) 00000-0000</li>
                            <li className="">Rua ali Perto, 12, Centro - Patos/PB </li>
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
                                <IconButton src={ instagramIcon } label="ìcone do Instagram" />
                            </li>
                            <li>
                                <IconButton src={ linkedinIcon } label="Ícone do LinkedIn" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="mt-27.5 text-xs text-center text-W4 md:text-start md:text-lg">Todos os direitos reservados. © Knex Consultoria.</p>
        </footer>
    )
}