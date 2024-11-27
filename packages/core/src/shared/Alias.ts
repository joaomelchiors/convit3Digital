export default class Alias {
    static formatar(valor: string | undefined): string {
        if(!valor) return ""   

        return valor.replace(/ /g, "-").toLowerCase();
    }
}