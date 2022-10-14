import { Module } from '@nestjs/common';
import { DatabasePostgresModule } from 'database-postgres/database-postgres';
import { ServiceLoggerModule } from 'service-logger/service-logger';
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
