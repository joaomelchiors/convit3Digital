import { ReactNode } from "react"
import Logo from "./logo"

export interface PaginaProps {
    children: NonNullable<ReactNode>
    className?: string
}

export default function Pagina(props:PaginaProps) {
    
    
    return (
        <div className="
            flex flex-col
            justify-center items-center
            p-10 min-h-screen
            bg-[url('/background.png')] bg-cover
        ">
            <Logo />
            <main className={`
                flex-1
                flex flex-col justify-center
                py-11 container bg-red-500
                ${props.className} 
            0`}>{props.children}</main>
        </div>
    )
}