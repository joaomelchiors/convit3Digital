import { Evento } from "@/core";
import validarEvento from "./validarEventos";
import { Id, Senha } from "@/core/shared";

export default function completarDadosEvento (eventoParcial: Partial<Evento>): Evento {

    const erros: string[]  = validarEvento(eventoParcial)

    if (erros.length) {
        throw new Error(erros.join("\n"))
    }

    const evento: Evento = {
        ...eventoParcial,
        id: eventoParcial.id ?? Id.new(),
        senha: eventoParcial.senha ?? Senha.new(20),
        publicoEsperado: eventoParcial.publicoEsperado ?? 3
    } as Evento  //as evento porque eu acredito que depois da validaçõa todos os dados estão certos

    return evento
}

