import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

import { WinstonModule, utilities } from 'nest-winston'
import * as winston from 'winston'
import { createLogger } from 'winston'

import 'winston-daily-rotate-file'

async function bootstrap() {
  const instance = createLogger({
    transports: [
      new winston.transports.Console({
        level: 'info',
        format: winston.format.combine(winston.format.timestamp(), utilities.format.nestLike()),
      }),
      new winston.transports.DailyRotateFile({
        level: 'warn',
        dirname: 'slogs',
        filename: 'slogs/%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        format: winston.format.combine(winston.format.timestamp(), utilities.format.nestLike()),
      }),
    ],
  })

  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({ instance }),
  })
  await app.listen(3000)
}
bootstrap()
