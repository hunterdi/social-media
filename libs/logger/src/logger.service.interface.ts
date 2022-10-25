import Pino from 'pino';

export interface ILoggerService {
    setContext(context: string): void;
    info(obj: any): void;
    warn(obj: any): void;
    error(obj: any): void;
    debug(obj: any): void;
    logger(): Pino.Logger;
}

export const ILoggerService = Symbol("ILoggerService");