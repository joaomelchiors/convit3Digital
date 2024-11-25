import { eventos } from "@/core"
import Image from "next/image"
import Link from "next/link"
import QRCode from "react-qr-code"

export default function PageEventos () {

    const listaEventos = eventos

    return (
        <div className="grid grid-cols-3 gap-5">
            {listaEventos.map((evento) => (
                <div id="renderBox"
                    key={evento.id} 
                    className="
                        flex flex-col
                        bg-zinc-800 rounded-lg w-full
                        overflow-hidden
                ">
                    <div id="renderBoxImage" className="
                        relative w-full h-52
                    ">
                        <Image 
                            src={evento.imagem} fill alt={'Evento Imagem'}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            placeholder = 'empty'
                            className="object-cover"
                        />
                    </div>
                    <div id="renderBoxInfo" className="
                        flex-1 items-center
                        flex flex-col p-7 gap-4
                    ">
                        <span className="text-lg font-black">{evento.nome}</span>
                        <p className="
                            flex-1
                            text-sm text-zinc-400
                        ">
                            {evento.descricao}
                        </p>
                        <QRCode value={JSON.stringify({ id: evento.id, senha: evento.senha })} className="w-44 h-44"/>
                        <div className="
                            flex justify-center gap-5
                        ">
                            <Link href={`/evento/admin/${evento.id}/${evento.senha}`}
                                className="
                                    flex-1
                                    botao vermelho   
                            ">
                                Admin
                            </Link>
                            <Link href={`/convite/${evento.alias}`}
                                className="
                                    flex-1
                                    botao verde    
                            ">
                                Cliente
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

//habilitar imagens no nex.config.ts