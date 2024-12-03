import { Evento } from "../model/";
import validarEvento from "./validarEventos";
import { Alias, Id, Senha } from "../../shared/";

export default function completarDadosEvento (eventoParcial: Partial<Evento>): Evento {

    const erros: string[]  = validarEvento(eventoParcial)

    if (erros.length) {
        throw new Error(erros.join("\n"))
    }

    const evento: Evento = {
        id: eventoParcial.id ?? Id.new(),
        alias: eventoParcial.alias ?? Alias.formatar(eventoParcial.nome),
        senha: eventoParcial.senha ?? Senha.new(20),
        ...eventoParcial,
        publicoEsperado: eventoParcial.publicoEsperado ?? 3,
    } as Evento //as evento porque eu acredito que depois da validaçõa todos os dados estão certos, mesmo sem a lista de convidados

    return evento
}
