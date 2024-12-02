import { Module } from '@nestjs/common';
import { EventosController } from './eventos.controller';
import { PrismaProvider } from 'src/bd/prisma.provider';
import { EventoProvider } from './evento.provider';

@Module({
  imports: [PrismaProvider],
  controllers: [EventosController],
  providers: [EventoProvider]
})
export class EventosModule {}
