import { Module } from '@nestjs/common';
import { EventosController } from './eventos.controller';
import { BdModule } from 'src/bd/bd.module'
import { EventoProvider } from './evento.provider';

@Module({
  imports: [BdModule],
  controllers: [EventosController],
  providers: [EventoProvider]
})
export class EventosModule {}
