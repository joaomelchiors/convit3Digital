import { Evento } from "@/core"
import InformacoesEvento from "./InformacoesEvento"

export interface DashBoardEventoProps {
    evento: Evento
}


export default function DashBoardEvento(props: DashBoardEventoProps) {
    return (
        <div className="
            flex flex-col gap-2
        ">
            <div className="
                flex gap-2
            ">
                <InformacoesEvento 
                    className="flex-1"
                    evento={props.evento}
                /> 
            </div>
        </div>
    )
}