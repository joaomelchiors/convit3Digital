import { Convidado, Evento } from "@/core"
import InformacoesEvento from "./InformacoesEvento"
import AcessarViaQrCode from "./AcessarViaQrCode"
import Estatistica from "../shared/Estatistica"

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
        </div>
    )
}

/*

{
    id: "ovgn6cah9ub-xzwwufhvjv-qfteamfgmsm",
    alias: 'reuniao-familia-oliveira',
    senha: 'familia2024',
    nome: 'Reunião da Família Oliveira',
    data: new Date('2024-12-15T12:00:00Z'),
    local: 'Salvador, BA',
    descricao: 'Reunião de fim de ano da família Oliveira.',
    imagem: 'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
    imagemBackground:
        'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
    publicoEsperado: 50,
    listaDeConvidados: [
        {
            id: "0x6152fvmqud-pfgukrl59g-22rtg0eu331",
            nome: 'Thiago Oliveira',
            email: 'thiago@example.com',
            confirmado: true,
            possuiAcompanhantes: true,
            qtdeAcompanhantes: 4,
        },
        {
            id: "0x6152fvmqud-pfgukrl59g-22rtg0eu331",
            nome: 'Letícia Oliveira',
            email: 'leticia@example.com',
            confirmado: true,
            possuiAcompanhantes: false,
            qtdeAcompanhantes: 0,
        },
    ],
},
]

*/