import { NestFactory } from '@nestjs/core'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: WinstonModule.createLogger({ nce }),
  })

  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER))
  app.setGlobalPrefix('api/v1')
  await app.listen(3000)
}
bootstrap()
