import IndentificadorUnico from "./IdentificadorUnico";

export default interface Acompanhante extends IndentificadorUnico {
    nome: string;
    idade: number;
}