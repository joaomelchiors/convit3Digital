//metodos para acessar o banco de dados.

import { Injectable } from '@nestjs/common';
import { Convidado, Evento } from 'core';
import { PrismaProvider } from 'src/bd/prisma.provider';


@Injectable()
export class EventoProvider {
    constructor(readonly prisma: PrismaProvider) {}

    salvar(evento: Evento) {
        return this.prisma.evento.create({
            data: evento as any, //o mapeamento funciona pois os nomes da coluna no bd sao iguais aos nomes dos atributos do objeto.
        });
    }

    salvarConvidado(evento: Evento, convidado: Convidado){
        return this.prisma.convidado.create({
            data: {
                ...convidado,
                qtdeAcompanhantes: Number(convidado.qtdeAcompanhantes) ?? 0, //esse processo poderia estar no eventos.controler.ts
                evento: { connect: { id: evento.id } }
            }
        });
    }

    async buscarTodos(): Promise<Evento[]> {
        return this.prisma.evento.findMany() as any;
    }

    async buscarPorId(id: string, completo: boolean = false): Promise<Evento> | null {
        return this.prisma.evento.findUnique({
            where: {id},
            include: { listaDeConvidados: completo } //trazer só o evento ou o evento mais convidados
        }) as any;
    }

    async buscarPorAlias(alias: string, completo: boolean = false): Promise<Evento> | null {
        return this.prisma.evento.findUnique({
                select: { //ou usa-se select ou usa-se include
                    id: true,              
                    alias: true,        
                    nome: true,     
                    senha: completo,      
                    data: true,             
                    local: true,           
                    descricao: true,        
                    imagem: true,           
                    imagemBackground: true, 
                    publicoEsperado: completo,  
                    createdAt: true,        
                    listaDeConvidados: completo,
                },
            where: { alias }, //para buscar um campo ele tem que ser único.
        }) as any;
    }

}
