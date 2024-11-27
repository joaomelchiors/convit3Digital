import { Evento } from "../model"

export default function validarEvento(evento:Partial<Evento>): string[] {
    const erros:string[] = []
    
    if (!evento.nome) {
        erros.push("Nome é obrigatório") 
    }

    if(!evento.data) {
        erros.push("Data é obrigatória") 
    }

    if(!evento.descricao) {
        erros.push("Descrição é obrigatória") 
    }

    if (!evento.publicoEsperado) {
        erros.push("Publico esperado é obrigatório") 
    }

    return erros
}



