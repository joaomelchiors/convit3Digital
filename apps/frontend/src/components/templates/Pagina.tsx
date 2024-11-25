import { ReactNode } from "react"
import Logo from "./Logo"

export interface PaginaProps {
    children: NonNullable<ReactNode>
    className?: string
}

export default function Pagina(props:PaginaProps) {
    
    
    return (
        <div id="renderPagina" className="
            flex flex-col
            justify-center items-center
            py-10 min-h-screen
            bg-black bg-[url('/background.png')] bg-cover
        ">            
            <Logo />
            <main id="renderContainer" className={`
                flex-1
                flex flex-col justify-center
                text-white
                py-11 container 
                ${props.className}
            `}>
                {props.children}
            </main>
        </div>
    )
}

//classe container em global.css definindo a largura máxima do conteudo