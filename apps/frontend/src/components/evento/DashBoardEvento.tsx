import { Evento } from "@/core"
import InformacoesEvento from "./InformacoesEvento"

export interface DashBoardEventoProps {
    evento: Evento
}


export default function DashBoardEvento(props: DashBoardEventoProps) {
    return (
        <div>
            <div>
                <InformacoesEvento evento={props.evento}/> 
            </div>
        </div>
    )
}