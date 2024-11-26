import Convidado from "./Convidado";
import IndentificadorUnico from "./IdentificadorUnico";

export default interface Evento extends IndentificadorUnico {
    alias: string;
    nome: string;
    senha: string;
    data: Date;
    local: string;
    descricao: string;
    imagem: string;
    imagemBackground: string;
    publicoEsperado: number;
    listaDeConvidados: Convidado[];
}