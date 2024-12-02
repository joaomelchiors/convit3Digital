import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/bd/prisma.provider';

@Injectable()
export class EventoProvider {
    constructor(readonly prisma: PrismaProvider) {}
}
