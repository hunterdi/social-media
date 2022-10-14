import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, Logger, PinoLogger } from 'nestjs-pino';
import { ILoggerService } from '.';
import Pino from 'pino';
// import { ElasticsearchConnection } from './elasticsearch-connection';
// const pino = require('pino');
// const pinoElastic = require('pino-elasticsearch');
// const pinoMultiStream = require('pino-multi-stream').multistream;
// const ecsFormat = require('@elastic/ecs-pino-format')();
// import * as pino from 'pino'
@Injectable()
export class LoggerService implements ILoggerService {
    private _context: string;

    constructor(
        @InjectPinoLogger()
        private readonly _logger: PinoLogger,
    ) {
    }

    setContext(context: string): void {
        this._logger.setContext(context);
    }
    info(obj: any): void {
        this._logger.info(obj);
    }
    warn(obj: any): void {
        this._logger.warn(obj);
    }
    error(obj: any): void {
        this._logger.error(obj);
    }
    debug(obj: any): void {
        this._logger.debug(obj);
    }
    logger(): Pino.Logger {
        return this._logger.logger;
    }

    // public setContext(context: string): void {
    //     this._context = context;
    // }

    // public info(obj: any): void {
    //     const logger = this.getTypeLevel('info');
    //     logger.info(obj);
    // }

    // public warn(obj: any): void {
    //     const logger = this.getTypeLevel('warn');
    //     logger.warn(obj);
    // }

    // public error(obj: any): void {
    //     const logger = this.getTypeLevel('error');
    //     logger.error(obj);
    // }

    // public debug(obj: any): void {
    //     const logger = this.getTypeLevel('debug');
    //     logger.debug(obj);
    // }

    // private getTypeLevel(level: string): any {
    //     const streamToElastic = this.getElasticConnection();

    //     streamToElastic.on('error', (error) => {
    //         console.error('Elasticsearch client error:', error);
    //     })
    //     streamToElastic.on('insertError', (error) => {
    //         console.error('Elasticsearch server error:', error);
    //     })

    //     const result = pino({ level: level, ...ecsFormat }, streamToElastic);
    //     return result;
    // }

    // private getElasticConnection(): any {
    //     const result = pinoElastic({
    //         index: this._context,
    //         consistency: 'one',
    //         node: `http://${ElasticsearchConnection.host}:${ElasticsearchConnection.port}`,
    //         'es-version': 7,
    //         'flush-bytes': 1000
    //     });

    //     return result;
    // }
}
