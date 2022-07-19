import { NestFactory } from '@nestjs/core';
import { AppModule } from './application';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000
  await app.listen(port);
  console.log('server start at port', port)
}
bootstrap();
