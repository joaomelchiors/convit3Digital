import { Evento } from "@/core"
import QRCode from "react-qr-code"


export interface AcessarViaQrCodeProps {
    evento: Evento
}

export default function AcessarViaQrCode(props:AcessarViaQrCodeProps) {
    
    return (
        <div className="
            flex flex-col justify-center items-center
            px-10 gap-4
            border border-zinc-800
        ">
            <span className="text-sm font-light text-zinc-400">Acesse via mobile.</span>
            <QRCode 
                className="w-32 h-32"
                value={JSON.stringify(
                    { 
                        id: props.evento.id,  
                        senha: props.evento.senha
                    }
                )
            }/>
        </div>
    )
}