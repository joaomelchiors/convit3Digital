import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventosModule } from './eventos/eventos.module';

@Module({
    imports: [EventosModule],
    controllers: [AppController],
    providers: []
})
export class AppModule {}
