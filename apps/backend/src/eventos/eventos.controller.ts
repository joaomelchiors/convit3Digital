/*
    no deign da arquitetura limpa, os controllers ficam na camada de adptadores.
    ele é o intermediário entre a API rest (a chamada http) e a chamada para a camada de negócio
    é pegar algo que veio na API que é o json, por exemplo, e transformar em algo para a chamada de negocio
    o controller irá fazer essa tradução.
    POr isso a função de converter dados (serializar, deserializar)
    ------>>>>>>> uma evolução é colocar essas conversões em DTO's ou MAPPER's
*/


import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { complementarConvidado, completarDadosEvento, Convidado, DataBR, Evento, Id } from 'core';
import { EventoProvider } from './evento.provider';


/*
    como a classe EventoProvider é um injectable a criação da classe e tudo mais será feito pelo framework 
    então só precisa-se incluir ela no construtor.

    métodos que buscam retornam, métodos que salvam não retornam.
*/

@Controller('eventos')
export class EventosController {
    
    constructor(readonly repo: EventoProvider) {

    }


    @Post()
    async salvarEvento(@Body() novoEvento:Evento) {
        /*
        implementacao de teste com a constante
            const eventoCadastrado = eventos.find(( evento ) => evento.id === novoEvento.id || evento.alias === novoEvento.alias)

            if(!!eventoCadastrado) {
                throw new NotFoundException(`Evento já cadastrado.`)
            }
            
            const eventoCompleto = completarDadosEvento(this.deserializar(novoEvento))
            eventos.push(eventoCompleto)
            return this.serializar(eventoCompleto)
        */

        const eventoCompleto = completarDadosEvento(this.deserializar(novoEvento));

        const eventoCadastrado = await this.repo.buscarPorAlias(eventoCompleto.alias);

        if(eventoCadastrado && eventoCadastrado.id !== novoEvento.id) {
            throw new NotFoundException(`Já existe evento com esse alias.`)
        };

        await this.repo.salvar(eventoCompleto);   
    }

    @Post(':alias/convidado')
    async salvarConvidado(
        @Param('alias') alias: string,
        @Body() convidado: Convidado
    ) {
        /*
        implementacao de teste com a constante
            const evento = eventos.find(( evento ) => evento.id === id)
            if (!evento) {
                throw new NotFoundException(`Evento não encontrado.`)
            }

            const convidadoCompletar = complementarConvidado(convidado)

            evento.listaDeConvidados.push(convidadoCompletar);
            return this.serializar(evento)
        */

        const evento = await this.repo.buscarPorAlias(alias);

        if(!evento){
            throw new NotFoundException(`Evento não encontrado.`)
        }

        const convidadoCompletar = complementarConvidado(convidado)       
        await this.repo.salvarConvidado(evento, convidadoCompletar)
    }


    @Post('acessar')
    async acessarEvento(@Body() dados: {id: string, senha: string}) {
        /*
        implementacao de teste com a constante
            const evento = eventos.find(( evento ) => evento.id === dados.id && evento.senha === dados.senha )

            if(!evento) {
                throw new NotFoundException(`Senha inválida.`)
            }

            return this.serializar(evento)
        */

        const evento = await this.repo.buscarPorId(dados.id, true)
        if(!evento) {
            throw new NotFoundException(`Evento não encontrado.`)
        }

        if(evento.senha !== dados.senha){
            throw new NotFoundException(`Senha inválida.`)
        }

        return this.serializar(evento)
    }

    @Get()
    async buscarEventos() {
        //return eventos.map(this.serializar) //era durante os teste pegando os dados das constantes, comentado core/eventos
        const eventos = await this.repo.buscarTodos();
        return eventos.map(this.serializar);        
    };

    @Get(':idOrAlias')
    async buscarIdOrEvento(@Param('idOrAlias') idOrAlias: string ) {
        /*
        funcao original de teste com a constante
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
        */

        //Primeiro validar o id
        
        /*
        minha implementação - funcionou, mas é ruim
            const eventoWithId: Evento | null = await this.repo.buscarPorId(idOrAlias)
            let eventoWithAlias: Evento | null 
        
            if(!eventoWithId) {
                eventoWithAlias = await this.repo.buscarPorAlias(idOrAlias)
                if (!eventoWithAlias) {
                    throw new NotFoundException(`Evento com idOrAlias ${idOrAlias} não localizado.`)
                }
                return this.serializar(eventoWithAlias)
            }
            return this.serializar(eventoWithId)
        */

        let evento: Evento

        if(Id.validate(idOrAlias)) { //principal idiea é verificar se a string é uuid, se for já pesquisa por id
            evento = await this.repo.buscarPorId(idOrAlias, true);  
        } else {
            evento = await this.repo.buscarPorAlias(idOrAlias, true);
        };

        if(!evento) {
            throw new NotFoundException(`Evento com idOrAlias ${idOrAlias} não localizado.`)
        }

        return this.serializar(evento)

    };

    @Get('validar/:alias/:id')
    async validarAlias(@Param('alias') alias:string, @Param('id') id:string) {
        /*
            const evento = eventos.find(( evento ) => evento.alias === alias);
            /*
                retorna um obejto 
                se o alias é novo - ok
                se não for o id tem que ser igual - ok
                qualquer outra situação false
            */
            /*
            return { valido: !evento || evento.id === id}
        */

        const evento = await this.repo.buscarPorAlias(alias, true)

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
