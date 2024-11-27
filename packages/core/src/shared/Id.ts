
//método static faz com que a classe não precisa ser instanciada para executa-lo
//sendo o método pertencente a classe

/*
//função gerando id únicos sem bibliotecas
    export default class Id {
        static new(): string {
            return `${this.hash()}-${this.hash()}-${this.hash()}`
        }

        private static hash(): string {
            return Math.random().toString(36).substring(2, 15)
        }
    }

    console.log(Id.new())
*/

import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

export default class Id {
    static new():string {
        return uuidv4()
    }

    static validate(id:string) {
        return uuidValidate(id)
    }
}


console.log(Id.validate("72a24948-e02d-4338-b75c-1ed47663d3b4"))