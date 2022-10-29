import { forwardRef, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthModule } from 'auth/auth/auth.module';
import { LoggerMiddleware, ServiceLoggerModule } from 'libs/logger/src';
import { AuthController } from './controllers/auth.controller';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    AuthModule,
    // ServiceLoggerModule,
    AutomapperModule.forRoot(
      {
        strategyInitializer: classes(),
      },
    ),
  ],
  controllers: [AuthController],
  providers: []
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
