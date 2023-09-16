import { Module } from '@nestjs/common'
import { RoleController } from './roles.controller'
import { RoleService } from './roles.service'

@Module({
  controllers: [RoleController],
  providers: [RoleService],
})
export class RolesModule {}
