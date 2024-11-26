import Image from "next/image";

export interface EstatisticaProps {
    texto: string;
    valor: number;
    imagem: string;
}

export default function Estatistica(props:EstatisticaProps) {
    
    return (
        <div id="container Estatitica" className="
            flex items-center
            px-6 py-2.5 gap-5
            bg-zinc-900 rounded-lg
        ">
            <div id="data" className="
                flex-1
                flex flex-col
            ">
                <span className="font-light text-zinc-400">{props.texto}</span>
                <span className="font-black text-2xl">{props.valor}</span>
            </div>
            <Image src={props.imagem} alt={'icone'} width={80} height={80} />
        </div>
    )
}
