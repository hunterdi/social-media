import { Module, RequestMethod, Scope } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { LoggerService } from './logger.service';
import { ILoggerService } from './logger.service.interface';
import { configuration } from 'libs/config/src/configuration';
import { logger } from './logger';

@Module({
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        // logger: logger,
        // formatters: {
        //   level(label) {
        //     return { level: label };
        //   },
        //   log(object) {
        //     const span = trace.getSpan(context.active());
        //     if (!span) return { ...object };
        //     const { spanId, traceId } = trace
        //       .getSpan(context.active())
        //       ?.spanContext();
        //     return { ...object, spanId, traceId };
        //   },
        // },
        // transport: {
        //   target: 'pino-pretty',
        //   options: {
        //     colorize: true,
        //     levelFirst: true,
        //     translateTime: 'UTC:mm/dd/yyyy, h:MM:ss TT Z',
            // translateTime: true
        //   },
        // },
      },
      exclude: [{ method: RequestMethod.ALL, path: 'health' }],
    })
  ],
  providers: [{
    provide: ILoggerService,
    useClass: LoggerService,
    scope: Scope.REQUEST
  }],
  exports: [ILoggerService],
})
export class ServiceLoggerModule { }