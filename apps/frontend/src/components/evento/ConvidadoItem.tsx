import { Convidado } from "@/core"

export interface ConvidadoItemProps {
    convidado: Convidado
}

export default function ConvidadoItem(props:ConvidadoItemProps){
    
    const { convidado } = props
    
    return (
        <li className="
            flex justify-between
            px-6 py-3 border border-zinc-800 rounded-md
            bg-black/40
        ">
            <div className="
                flex flex-col
            ">
                <span className="font-bold text-xl">{convidado.nome}</span>
                <span className="text-sm text-zinc-400">{convidado.email}</span>
            </div>
            <div className="
                flex flex-col items-end
            ">
                <span className="text-sm text-zinc-400">Acompanhantes</span>
                <span className="font-bold text-xl">{convidado.qtdeAcompanhantes}</span>
            </div>
        </li>
    )
}