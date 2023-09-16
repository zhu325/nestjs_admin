import { Injectable } from '@nestjs/common'
import { CreateLogDto } from './dto/create-logs.dto'
import { UpdateLogDto } from './dto/update-logs.dto'

@Injectable()
export class LogService {
  create(createLogDto: CreateLogDto) {
    return 'This action adds a new log'
  }

  findAll() {
    return `This action returns all log`
  }

  findOne(id: number) {
    return `This action returns a #${id} log`
  }

  update(id: number, updateLogDto: UpdateLogDto) {
    return `This action updates a #${id} log`
  }

  remove(id: number) {
    return `This action removes a #${id} log`
  }
}
