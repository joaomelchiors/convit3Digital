import { Id } from "@/core/shared";
import { Convidado } from "../model";

export default function criarConvidadoVazio ():Partial<Convidado> {

    return {
        id: Id.new(),
        nome: "",
        email: "",
        confirmado: true,
        qtdeAcompanhantes: 3,
        possuiAcompanhantes: false
    }
}

/*
    nome: string;
    email: string;
    telefone?: number;
    confirmado: boolean;
    qtdeAcompanhantes: number;
    possuiAcompanhantes: boolean;
    listaDeAcompanhante?: Acompanhante[];
*/