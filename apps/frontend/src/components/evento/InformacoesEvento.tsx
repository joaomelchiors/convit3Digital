import { Evento } from "@/core"

export interface InformacoesEventoProps {
    evento: Evento
}


export default function InformacoesEvento(props: InformacoesEventoProps) {
    const nome = props.evento.nome
   
    return (
        <div>
            {nome}
        </div>
    )
}