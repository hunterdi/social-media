import { INestApplication } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { SgaModule } from './sga.module';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(SgaModule);
  app.setGlobalPrefix('api');
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['broker:29092'],
      },
      // admin: {
      //   waitForLeaders: true
      // }
    }
  });
  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
