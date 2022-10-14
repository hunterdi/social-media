import { Module } from '@nestjs/common';
import { DatabasePostgresModule } from 'database-postgres/database-postgres';
import { UserService } from '.';

@Module({
  imports: [DatabasePostgresModule],
  providers: [UserService],
  exports: [UserService],
})
export class ServicesModule {}
