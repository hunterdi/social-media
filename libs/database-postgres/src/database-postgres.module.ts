import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { repositories } from '.';
import config from './config/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config.options),
    // TypeOrmModule.forFeature(repositories)
  ],
  providers: [],
  exports: [
    // TypeOrmModule.forFeature(repositories)
  ],
})
export class DatabasePostgresModule {}
