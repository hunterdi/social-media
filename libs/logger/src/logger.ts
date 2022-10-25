import { join } from 'path';
import Pino, { Logger } from 'pino';
import { LoggerOptions, destination } from 'pino';

export const loggerOptions: LoggerOptions = {
  level: 'info',
  formatters: {
    level(label) {
      return { level: label };
    },
    log(object) {
      return { ...object };
    },
  },
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      levelFirst: true,
      translateTime: 'UTC:mm/dd/yyyy, h:MM:ss TT Z',
      // translateTime: true
    },
  },
};

// export const logger: Logger = Pino(loggerOptions, destination(join(__dirname, '../../../', process.env.LOG_FILE_NAME)));
export const logger: Logger = Pino(loggerOptions);