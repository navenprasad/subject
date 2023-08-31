import { NestFactory } from '@nestjs/core';
import { NewsfeedModule } from './newsfeed.module';

async function bootstrap() {
  const app = await NestFactory.create(NewsfeedModule);
  await app.listen(3000);
}
bootstrap();
