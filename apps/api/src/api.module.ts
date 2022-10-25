import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'auth/auth/auth.module';
import { ServiceLoggerModule } from 'libs/logger/src';
import { AuthController } from './controllers/auth.controller';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { DtosModule } from 'dtos/dtos';

@Module({
  imports: [
    AuthModule,
    ServiceLoggerModule,
    AutomapperModule.forRoot(
      {
        strategyInitializer: classes(),
      },
    ),
  ],
  controllers: [AuthController],
  providers: []
})
export class ApiModule { }
