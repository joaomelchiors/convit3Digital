import { Convidado } from "../model";
import validarConvidado from "./validarConvidado";

export default function complementarConvidado(convidado: Partial<Convidado>): Convidado {

    const erros = validarConvidado(convidado)

    if (erros.length) {
        throw new Error(erros.join('/n'))
    }

    const temAcompanhantes = convidado.possuiAcompanhantes && 
        convidado.confirmado &&
        ((convidado.qtdeAcompanhantes ?? 0) > 0)


    const convidadoAtualizado = {
        ...convidado,
        qtdeAcompanhantes: temAcompanhantes ? convidado.qtdeAcompanhantes : 0,
    }

    /*
        o retorno é um objeto Convidado, porém sem colocar o as Convidado 
        fica o retrono sendo só um objeto e o ESlint Certificate, por isso o as
    */
    return convidadoAtualizado as Convidado

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
