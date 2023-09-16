import { Module } from '@nestjs/common'
import { LogController } from './logs.controller'
import { LogService } from './logs.service'

@Module({
  controllers: [LogController],
  providers: [LogService],
})
export class LogsModule {}
