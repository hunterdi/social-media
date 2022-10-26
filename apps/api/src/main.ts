import { NestFactory } from '@nestjs/core';
import { configuration } from 'libs/configuration/src/configuration';
import { Logger } from 'nestjs-pino';
import { ApiModule } from './api.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
// const tracer = require('./tracing');

async function bootstrap() {
  // await tracer.start();
  const app = await NestFactory.create(ApiModule);
  // , { 
  // bufferLogs: true, 
  // logger: false, 
  // });
  app.setGlobalPrefix('api');
  app.useLogger(app.get(Logger));
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.enableShutdownHooks();
  app.enableCors({ origin: '*' });

  const options = new DocumentBuilder()
    .setTitle('POC')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(configuration.apiPort || 3000, () => {
    console.log(`http://localhost:${configuration.apiPort}/api`);
  });
}
bootstrap();
