
//método static faz com que a classe não precisa ser instanciada para executa-lo
//sendo o método pertencente a classe

export default class Id {
    static new(): string {
        return `${this.hash()}-${this.hash()}-${this.hash()}`
    }

    private static hash(): string {
        return Math.random().toString(36).substring(2, 15)
    }
}
