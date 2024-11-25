import { ReactNode } from "react"

export interface InfomacaoPropos {
    label: string
    children: NonNullable<ReactNode>
}

export default function Infomacao(props: InfomacaoPropos) {
    return (
        <div className="
            flex-1
            flex flex-col items-start
            px-6 py-3
            border border-zinc-800 
            rounded-md
        ">
            <span className="text-zinc-400 font-bold">{props.label}</span>
            <div className="text-xl">{props.children}</div>
        </div>
    )
}