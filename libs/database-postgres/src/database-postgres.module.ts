import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from 'typeorm';
import { repositories } from '.';
import * as config from './config/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: config.options.type,
        host: config.options.host,
        port: config.options.port,
        username: config.options.username,
        password: config.options.password,
        database: config.options.database,
        entities: config.options.entities,
      }),
      dataSourceFactory: async (options) => {
        const dataSourceInit = await new DataSource(options).initialize();
        return dataSourceInit;
      }
    })
    // TypeOrmModule.forFeature(repositories)
  ],
  providers: [],
  exports: [
    // TypeOrmModule.forFeature(repositories)
  ],
})
export class DatabasePostgresModule { }
