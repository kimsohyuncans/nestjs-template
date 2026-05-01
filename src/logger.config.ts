import { Params } from 'nestjs-pino';
import { config } from '../config';
import * as path from 'path';

export const loggerConfig: Params = {
  pinoHttp: {
    level: config.isProduction ? 'info' : 'debug',
    autoLogging: true,
    transport: config.isProduction
      ? {
          target: 'pino-roll',
          options: {
            file: path.join(config.LOG_DIR, 'app.log'),
            frequency: 'daily',
            size: '50m',
            extension: '.jsonl',
            dateFormat: 'yyyy-MM-dd',
            limit: { count: 14 },
            mkdir: true,
          },
        }
      : {
          target: 'pino-pretty',
          options: {
            colorize: true,
            singleLine: true,
          },
        },
    serializers: {
      err: (err: Error) => ({
        type: err.constructor?.name,
        message: err.message,
        stack: err.stack,
      }),
    },
  },
};
