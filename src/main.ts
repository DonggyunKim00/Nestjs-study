import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // pipe
  // global pipe를 사용하여 들어오는 모든 요청에대해 유효성 검사 수행
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // 목록에없는 리퀘스트를 금지시킴
      transform: true, // 리퀘스트할때 실제 타입으로 변환시켜줌
    }),
  );

  await app.listen(3000);
}
bootstrap();
