import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { DataBR, Evento, eventos, Id } from 'core';

@Controller('eventos')
export class EventosController {

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
    }
}
