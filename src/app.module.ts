import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './database/database.module'
import { LogsController } from './logs/logs.controller'
import { LogsModule } from './logs/logs.module'
import { RolesModule } from './roles/roles.module'
import { RolesService } from './roles/roles.service'
import { UserModule } from './user/user.module'

@Module({
  imports: [DatabaseModule, UserModule, LogsModule, RolesModule],
  controllers: [AppController, LogsController],
  providers: [AppService, RolesService],
})
export class AppModule {}
