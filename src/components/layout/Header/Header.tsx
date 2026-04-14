"use client"

import logoKnex from "@/public/assets/logo/logo-knex.svg"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { IoMenu, IoClose } from "react-icons/io5"
import MenuItem from "./MenuItem"

export default function Header() {
    const [ openMenu, setOpenMenu ] = useState(false)

    function closeMenu() {
        setOpenMenu(false)
    }

    return (
        <header className={ `z-100 w-full px-6 py-10 bg-BackGround lg:px-10 xl:px-60 ${ openMenu ? "fixed" : "static" }` }>
            <nav className="flex items-center justify-between">
                
            <Link href="/">
                <Image src={ logoKnex } alt="Logo da Knex" className={ `transition ease-out duration-300 md:opacity-100 md:pointer-events-auto ${ openMenu ? "opacity-0" : "opacity-100" }` } />
            </Link>

                <ul className={ `flex flex-col fixed top-36.5 left-0 w-full h-full bg-BackGround text-center font-[montserrat] transition ease-out duration-300 md:flex-row md:gap-16 md:opacity-100 md:pointer-events-auto md:static md:w-auto md:h-auto ${ openMenu ? "opacity-100" : "opacity-0 pointer-events-none" }` }>
                    <MenuItem 
                        url="/"
                        text="Home"
                        closeMenu={ closeMenu }
                    />
                    <MenuItem 
                        url="/sobre"
                        text="Sobre"
                        closeMenu={ closeMenu }
                    />
                    <MenuItem 
                        url="/faq"
                        text="FAQ"
                        closeMenu={ closeMenu }
                    />
                    <li className="md:hidden">
                        <Link
                            href="/contatos"
                            className="inline-block w-10/12 px-8 py-6 rounded-sm bg-G4 font-[Quantico] font-bold text-Gg0 hover:bg-white ease-in-out duration-300 md:text-2xl"
                            onClick={ closeMenu }
                        >
                            Entrar em Contato
                        </Link>
                    </li>
                </ul>

                <Link href="/contatos" className="hidden rounded-sm px-8 py-4 bg-G4 font-[Quantico] font-bold text-nowrap text-Gg0 hover:bg-white ease-in-out duration-300 md:inline-block md:text-xl lg:text-2xl" >Entrar em Contato</Link>

                <button 
                    className="flex justify-between items-center gap-2 px-4 py-3 max-w-30 bg-Footer border border-P2 rounded-sm font-[Quantico] text-white md:hidden"
                    onClick={() => {
                        setOpenMenu(!openMenu)
                    }}
                >
                    <div className="flex justify-center items-center relative w-12.5">
                        <p className={ `absolute transition ease-out duration-300 ${ openMenu ? "opacity-100" : "opacity-0" }` }>Fechar</p>
                        <p className={ `absolute transition ease-out duration-300 ${ openMenu ? "opacity-0" : "opacity-100" }` }>Menu</p>
                    </div>

                    <div className="flex justify-center items-center relative w-6 h-6" >    
                        <IoClose className={ `absolute text-G5 text-2xl transition ease-out duration-300 ${ openMenu ? "opacity-100" : "opacity-0" }` } />
                        <IoMenu className={ `absolute text-G5 text-2xl transition ease-out duration-300 ${ openMenu ? "opacity-0" : "opacity-100" }` } />
                    </div>
                </button>
            </nav>
        </header>
    )
}