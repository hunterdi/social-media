import { ArgumentsHost, ExceptionFilter, HttpException, HttpServer, HttpStatus } from "@nestjs/common";
import { HttpArgumentsHost } from "@nestjs/common/interfaces";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";
import { MESSAGES } from "@nestjs/core/constants";
import { isObject } from "class-validator";

export class BaseExceptionFilter<T = any> implements ExceptionFilter<T> {
    constructor(private readonly _httpAdapterHost: HttpAdapterHost) { }

    catch(exception: T, host: ArgumentsHost): void {
        const { httpAdapter } = this._httpAdapterHost;
        const ctx = host.switchToHttp();

        if (!(exception instanceof HttpException)) {
            return this.handleUnknownError(httpAdapter, ctx);
        }

        const res = exception.getResponse();
        const body = isObject(res)
            ? res
            : {
                statusCode: exception.getStatus(),
                message: res,
                path: httpAdapter.getRequestUrl(ctx.getRequest()),
            };

        httpAdapter.reply(res, body, exception.getStatus());
    }

    public handleUnknownError(
        applicationRef: AbstractHttpAdapter | HttpServer,
        ctx: HttpArgumentsHost
    ): void {
        const body = {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: MESSAGES.UNKNOWN_EXCEPTION_MESSAGE,
            path: applicationRef.getRequestUrl(ctx.getRequest())
        };

        applicationRef.reply(ctx, body, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}