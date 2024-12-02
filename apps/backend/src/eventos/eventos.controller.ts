/*
    no deign da arquitetura limpa, os controllers ficam na camada de adptadores.
    ele é o intermediário entre a API rest (a chamada http) e a chamada para a camada de negócio
    é pegar algo que veio na API que é o json, por exemplo, e transformar em algo para a chamada de negocio
    o controller irá fazer essa tradução.
    POr isso a função de converter dados (serializar, deserializar)
*/


import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { complementarConvidado, completarDadosEvento, Convidado, DataBR, Evento, eventos, Id } from 'core';

@Controller('eventos')
export class EventosController {


    @Post()
    async salvarEvento(@Body() novoEvento:Evento) {
        const eventoCadastrado = eventos.find(( evento ) => evento.id === novoEvento.id || evento.alias === novoEvento.alias)

        if(!!eventoCadastrado) {
            throw new NotFoundException(`Evento já cadastrado.`)
        }
        
        const eventoCompleto = completarDadosEvento(this.deserializar(novoEvento))
        eventos.push(eventoCompleto)
        return this.serializar(eventoCompleto)
    }

    @Post(':id/convidado')
    async salvarConvidado(
        @Param('id') id: string,
        @Body() convidado: Convidado
    ) {
        const evento = eventos.find(( evento ) => evento.id === id)
        if (!evento) {
            throw new NotFoundException(`Evento não encontrado.`)
        }

        const convidadoCompletar = complementarConvidado(convidado)

        evento.listaDeConvidados.push(convidadoCompletar);
        return this.serializar(evento)
    }


    @Post('acessar')
    async acessarEvento(@Body() dados: {id: string, senha: string}) {
        const evento = eventos.find(( evento ) => evento.id === dados.id && evento.senha === dados.senha )

        if(!evento) {
            throw new NotFoundException(`Senha inválida.`)
        }

        return this.serializar(evento)
    }

    @Get()
    async buscarEventos() {
        return eventos.map(this.serializar)
    };

    @Get(':idOrAlias')
    async buscarIdOrEvento(@Param('idOrAlias') idOrAlias: string ) {
        let evento: Evento | undefined

        if(Id.validate(idOrAlias)) {
            //find ou filter, diferença é que find retorna 1 elemento e filter sempre retorna outro array
            evento = eventos.find(( evento ) => evento.id === idOrAlias );    
        } else {
            evento = eventos.find(( evento ) => evento.alias === idOrAlias);
        };

        if(!evento) {
            throw new NotFoundException(`Evento com idOrAlias ${idOrAlias} não localizado.`)
        }

        return this.serializar(evento)

    };

    @Get('validar/:alias/:id')
    async validarAlias(@Param('alias') alias:string, @Param('id') id:string) {
        const evento = eventos.find(( evento ) => evento.alias === alias);
        /*
            retorna um obejto 
            se o alias é novo - ok
            se não for o id tem que ser igual - ok
            qualquer outra situação false
        */
        return { valido: !evento || evento.id === id}
    }

    private serializar(evento: Evento) {
        return {
            ...evento,
            data: DataBR.paraString(evento.data)
        }
    };

    private deserializar(evento: any): Evento {
        return {
            ...evento,
            data: DataBR.paraDate(evento.data)
        }
    };
}
