import { Convidado } from "../model"

export default function validarConvidado(evento:Partial<Convidado>): string[] {
    const erros:string[] = []
    
    if (!evento.nome) {
        erros.push("Nome é obrigatório") 
    }

    if(!evento.email) {
        erros.push("Email é obrigatório") 
    }

    if(!evento.confirmado) {
        erros.push("Confirmar a presença ou sua ausência é obrigatória") 
    }

    if (!evento.qtdeAcompanhantes) {
        erros.push("Quantidade de acompanhantes é obrigatório") 
    }

    if (!evento.possuiAcompanhantes) {
        erros.push("Preenchimento obrigatório") 
    }

    return erros
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