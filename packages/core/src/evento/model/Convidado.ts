import Acompanhante from "./Acompanhante";
import IndentificadorUnico from "./IdentificadorUnico";

export default interface Convidado extends IndentificadorUnico{
    nome: string;
    email: string;
    telefone?: number;
    confirmado: boolean;
    qtdeAcompanhantes: number;
    possuiAcompanhantes: boolean;
    listaDeAcompanhante?: Acompanhante[];
}