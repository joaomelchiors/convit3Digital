export default class Senha {
    static new(tamanho: number = 8): string {
        const minusculas = 'abcdefghijklmnopqrstixwyz';
        const maiuscula = minusculas.toUpperCase();
        const numeros = '0123456789';
        const caracteresEspeciais = '!@#$%&*';

        const grupos = [minusculas, maiuscula, numeros, caracteresEspeciais];

        const senha = []
        for (let i = 0; i < tamanho; i++){
            /*
                o conujunto de Métodos Math retorna um numero inteiro entre 0 e o tamanho do array
                com isso sorteamos um grupo. Logo em seguida fazemos o mesmo para sortear dentro do 
                grupo escolhido um caracter, pois uma string = caracter[]
            */
            const grupo = grupos[Math.floor(Math.random() * grupos.length)];
            senha.push(grupo[Math.floor(Math.random() * grupo.length)]) //executar 8 push
        }
        //return senha.reduce((acc, item) => acc + item, '')
        return senha.join("")
    }
}

console.log(Senha.new(30))

