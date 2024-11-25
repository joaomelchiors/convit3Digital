'use client'

import DashBoardEvento from "@/components/evento/DashBoardEvento"
import FormSenhaEvento from "@/components/evento/FormSenhaEvento"
import { Convidado, Evento, eventos } from "@/core"
import { use, useEffect, useState } from "react"

export interface PaginaAdminEventoProps {
    params: Promise<{
        todos: string[]
    }>
}

export default function PaginaAdminEvento(props:PaginaAdminEventoProps) {
    
    //const params = await props.params
    const params = use(props.params) //aqui substitui o await e o async
    // o use tem o proposito de encapsular os parametros dentro de uma promisse

    const id = params.todos[0]
    const [evento, setEvento] = useState<Evento | null>(null);
    const [senha, setSenha] = useState<string | null>(params.todos[1] ?? null) 
    //ao definir a variável senha controlada pelo useState temos que definir que  a função rodará no client

    const listaConvidadoConfirmado:Convidado[] = evento?.listaDeConvidados.filter((e) => e.confirmado) ?? [];
    const listaConvidadoSemConfirmacao:Convidado[] = evento?.listaDeConvidados.filter((e) => !e.confirmado) ?? [];

    const totalConfirmado = listaConvidadoConfirmado.reduce((acc:number, convidado:Convidado) => 
        acc + convidado.qtdeAcompanhantes + 1, 0)
    
    function carregarEvento() {
        const evento = eventos.find(ev=> ev.id === id && ev.senha === senha)
        setEvento(evento ?? null);
    }

    useEffect(() => {
        carregarEvento()
    }, [id, senha])

    return (
        <div className="flex flex-col justify-center items-center">
            {evento ? <DashBoardEvento evento={evento}/> : <FormSenhaEvento />}
        </div>
    )
}