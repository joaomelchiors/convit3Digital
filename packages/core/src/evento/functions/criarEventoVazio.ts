//função que vai devolver um evento parcial
//a ideia é com que a interface não quebre caso todos os atributos não sejam passados

import { Id } from "../../shared";
import { Evento } from "../model";

export default function criarEventoVazio(): Partial<Evento> {
    return {
        id: Id.new(),
        nome: "",
        data: new Date(),
        local: "",
        descricao: "",
        imagem: "",
        imagemBackground: "",
        publicoEsperado: 80,
    }
}