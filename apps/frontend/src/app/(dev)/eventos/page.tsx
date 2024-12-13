'use client';

import Image from 'next/image';
import Link from 'next/link';
import QRCode from 'react-qr-code';
import Evento from 'core/src/evento/model/Evento';
import { useEffect, useState } from 'react';

export default function PageEventos() {
    const [listaEventos, setListaEventos] = useState<Evento[] | null>(null);

    useEffect(() => {
        async function fetchEventos() {
            try {
                const response = await fetch('http://localhost:4000/eventos');
                if (!response.ok) {
                    throw new Error(`Erro: ${response.statusText}`);
                }
                const eventos: Evento[] = await response.json();
                setListaEventos(eventos); // Atualiza o estado com os eventos obtidos
            } catch (error) {
                console.error('Ocorreu um erro ao buscar os eventos:', error);
            }
        }

        fetchEventos(); // Chama a função de busca
    }, []);

    return (
        <div className="grid grid-cols-3 gap-5">
            {listaEventos?.map((evento) => (
                <div
                    id="renderBox"
                    key={evento.id}
                    className="
                        flex flex-col
                        bg-zinc-800 rounded-lg w-full
                        overflow-hidden
                "
                >
                    <div
                        id="renderBoxImage"
                        className="
                        relative w-full h-52
                    "
                    >
                        <Image
                            src={evento.imagem}
                            fill
                            alt={'Evento Imagem'}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            placeholder="empty"
                            className="object-cover"
                        />
                    </div>
                    <div
                        id="renderBoxInfo"
                        className="
                        flex-1 items-center
                        flex flex-col p-7 gap-4
                    "
                    >
                        <span className="text-lg font-black">{evento.nome}</span>
                        <p
                            className="
                            flex-1
                            text-sm text-zinc-400
                        "
                        >
                            {evento.descricao}
                        </p>
                        <QRCode
                            value={JSON.stringify({ id: evento.id, senha: evento.senha })}
                            className="w-44 h-44"
                        />
                        <div
                            className="
                            flex justify-center gap-5
                        "
                        >
                            <Link
                                href={`/evento/admin/${evento.id}/${evento.senha}`}
                                className="
                                    flex-1
                                    botao vermelho   
                            "
                            >
                                Admin
                            </Link>
                            <Link
                                href={`/convite/${evento.alias}`}
                                className="
                                    flex-1
                                    botao verde    
                            "
                            >
                                Cliente
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

//habilitar imagens no nex.config.ts
