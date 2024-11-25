import Pagina from "@/components/templates/Pagina"
import { ReactNode } from "react"

export interface LayoutEventoProps {
    children: NonNullable<ReactNode>
}

export default function LayoutEvento (props:LayoutEventoProps) {
    return(
        <Pagina>
            {props.children}
        </Pagina>
    )
}