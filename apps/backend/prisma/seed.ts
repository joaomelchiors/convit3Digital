import { PrismaClient } from "@prisma/client";
import { eventos } from "core";

async function seed() {
    const prisma = new PrismaClient();
    
    const transacoes = eventos.map(async (evento) => {
        await prisma.evento.create({
           data: {
            alias: evento.alias,
            nome: evento.nome,
            senha: evento.senha,
            data: evento.data,
            local: evento.local,
            descricao: evento.descricao,
            imagem: evento.imagem,
            imagemBackground: evento.imagemBackground,
            publicoEsperado: evento.publicoEsperado,
            listaDeConvidados: {
                create: evento.listaDeConvidados.map((convidado)=> ({
                    nome: convidado.nome,
                    email: convidado.email,
                    confirmado: convidado.confirmado,
                    qtdeAcompanhantes: convidado.qtdeAcompanhantes,
                    possuiAcompanhantes: convidado.possuiAcompanhantes,
                })),
            }
           }
        })
    });

    await Promise.all(transacoes); //esperar todas as transações terminarem antes de sair

}

seed();