import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ErroFilter from './erro.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });
    app.useGlobalFilters(new ErroFilter()); //passando o erro como filtro
    //poderia criar um filtro aqui para log
    await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
