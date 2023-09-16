import { LogEnum } from '@/enum/config.enum'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { WinstonModule, WinstonModuleOptions, utilities } from 'nest-winston'
import * as winston from 'winston'
import * as DailyRotateFile from 'winston-daily-rotate-file'
import { Console } from 'winston/lib/winston/transports'
import { LogController } from './logs.controller'
import { LogService } from './logs.service'

function createDailyRotateTransport(level: string, filename: string) {
  return new DailyRotateFile({
    level,
    dirname: 'logs',
    filename: `${filename}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.combine(winston.format.timestamp(), winston.format.simple()),
  })
}

@Module({
  imports: [
    WinstonModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const timestamp = configService.get(LogEnum.TIMESTAMP) === 'true'
        const conbine = []
        if (timestamp) {
          conbine.push(winston.format.timestamp())
        }
        conbine.push(utilities.format.nestLike())
        const consoleTransports = new Console({
          level: configService.get(LogEnum.LOG_LEVEL) || 'info',
          format: winston.format.combine(...conbine),
        })

        return {
          transports: [
            consoleTransports,
            ...(configService.get(LogEnum.LOG_ON)
              ? [createDailyRotateTransport('info', 'application'), createDailyRotateTransport('warn', 'error')]
              : []),
          ],
        } as WinstonModuleOptions
      },
    }),
  ],
  controllers: [LogController],
  providers: [LogService],
})
export class LogsModule {}
