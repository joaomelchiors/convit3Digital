export default class DataBR {
    static paraString(data?:Date): string {
        const pad = (n: number) => n.toString().padStart(2, "0")
        
        const dataTemp:Date = data ?? new Date();
        const ano = dataTemp.getFullYear();
        const mes = pad(dataTemp.getMonth() + 1); //mes começa no indice 0
        const dia = pad(dataTemp.getDay());
        const hora = pad(dataTemp.getHours());
        const minuto = pad(dataTemp.getMinutes());

        return `${ano}-${mes}-${dia}T${hora}:${minuto}`
    }
    static paraDate(data:string): Date {
        const [ano, mes, dia] = data.split('T')[0].split('-');
        const [hora, minuto] = data.split('T')[1].split(':');

        return new Date(
            parseInt(ano),
            parseInt(mes) - 1,
            parseInt(dia),
            parseInt(hora),
            parseInt(minuto)
        ); //no console mostra com a timeZone 0
    }
}

console.log(DataBR.paraString())
console.log(DataBR.paraDate('2024-11-02T22:32'))