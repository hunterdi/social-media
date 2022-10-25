import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from 'typeorm';
import { repositories } from '.';
import * as config from './config/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config.options)
    // TypeOrmModule.forRootAsync({
    //   useFactory: () => (config.options),
    //   dataSourceFactory: async (options) => {
    //     const dataSourceInit = await new DataSource(options).initialize();
    //     return dataSourceInit;
    //   }
    // })
    // TypeOrmModule.forFeature(repositories)
  ],
  providers: [],
  exports: [
    // TypeOrmModule.forFeature(repositories)
  ],
})
export class DatabasePostgresModule { }
