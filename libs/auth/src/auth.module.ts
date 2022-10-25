import { Module } from '@nestjs/common';
import { DatabasePostgresModule } from 'database-postgres/database-postgres';
import { ServiceLoggerModule } from 'libs/logger/src';
import { AuthService } from './auth.service';

@Module({
  imports: [
    DatabasePostgresModule,
    ServiceLoggerModule
  ],
  providers: [
    AuthService, AuthService],
  exports: [AuthService],
})
export class AuthModule { }
