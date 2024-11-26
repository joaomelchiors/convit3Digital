import Convidado from "../model/Convidado";
import Evento from "../model/Evento";

export function calcularTotalConvidados(evento: Evento){
    const totalConvidados = evento.listaDeConvidados.length
    const totalDeAconpanhante = evento.listaDeConvidados
        .reduce((acc, convidado:Convidado) => 
            acc + (convidado.listaDeAcompanhante ? convidado.listaDeAcompanhante.length : 0)
        , 0)
    
    return totalConvidados + totalDeAconpanhante
}