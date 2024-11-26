import { Convidado, Evento } from "@/core"
import InformacoesEvento from "./InformacoesEvento"
import AcessarViaQrCode from "./AcessarViaQrCode"
import Estatistica from "../shared/Estatistica"
import ListaConvidado from "./ListaConvidado";

export interface DashBoardEventoProps {
    evento: Evento;
    presentes: Convidado[];
    ausentes: Convidado[];
    totalGeral: number;

}


export default function DashBoardEvento(props: DashBoardEventoProps) {

    const { evento } = props

    return (
        <div className="
            flex flex-col gap-2
        ">
            <div id="container info" className="
                flex gap-2
                self-stretch
            ">
                <InformacoesEvento 
                    className="flex-1"
                    evento={evento}
                />
                <AcessarViaQrCode evento={evento} />
            </div>
            <div id="container gridEstatistica"
                className="
                    grid grid-cols-3
                    gap-6 mt-4
            ">
                <Estatistica 
                    texto="Expectativa de Convidados:"
                    valor={evento.publicoEsperado} 
                    imagem={"/icones/convidados.svg"}
                />
                <Estatistica 
                    texto="Confirmações:"
                    valor={props.presentes.length} 
                    imagem={"/icones/confirmados.svg"}
                />
                <Estatistica 
                    texto="Total Confirmado:"
                    valor={props.totalGeral} 
                    imagem={"/icones/acompanhantes.svg"}
                />
            </div>
            <button className="botao azul self-end mt-12">
                <span>Atualizar Lista de Convidados</span>
            </button>

            <span className="
                flex
                py-2
                font-bold text-xl text-white/80
            ">
                Convidados que confirmaram PRESENÇA
            </span>
            <ListaConvidado convidados={props.presentes} />
            <span className="
                flex
                py-2
                font-bold text-xl text-white/80
            ">
                Convidados que confirmaram AUSÊNCIA
            </span>
            <ListaConvidado convidados={props.ausentes} />
        </div>
    )
}
