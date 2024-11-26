import { Evento } from "@/core"
import InformacoesEvento from "./InformacoesEvento"
import AcessarViaQrCode from "./AcessarViaQrCode"

export interface DashBoardEventoProps {
    evento: Evento
}


export default function DashBoardEvento(props: DashBoardEventoProps) {
    return (
        <div className="
            flex flex-col gap-2
        ">
            <div id="container" className="
                flex gap-2
                self-stretch
            ">
                <InformacoesEvento 
                    className="flex-1"
                    evento={props.evento}
                />
                <AcessarViaQrCode evento={props.evento} />
            </div>
        </div>
    )
}