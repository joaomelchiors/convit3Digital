import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(Error)
export default class ErroFilter implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost) {
        const contexto = host.switchToHttp();
        const request = contexto.getRequest<Request>();
        const response = contexto.getResponse<Response>();
        
        //status não é um atributo dentro do erro
        const status = (exception as any).getStatus 
        ? (exception as any).getStatus()
        : 500;

        console.error(exception)

        response.status(status).json({
            statusCode: status,
            timeStamp: new Date().toISOString(),
            path: request.url,
            message: exception.message
        })
    }
}