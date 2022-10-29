import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { configuration } from 'libs/configuration/src/configuration';
import { Logger } from 'nestjs-pino';
import { ApiModule } from './api.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import { BaseExceptionFilter } from '@app/exception-manager';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  app.setGlobalPrefix('api');
  // app.useLogger(app.get(Logger));
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new BaseExceptionFilter(httpAdapterHost));
 
  app.use(cookieParser());

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
