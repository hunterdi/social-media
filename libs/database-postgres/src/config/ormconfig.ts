import { configuration } from '../../../configuration/src';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { cwd, env } from 'process';
import { DataSource, DataSourceOptions } from "typeorm";
import * as databaseEntities from '../entities';
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from '../seeders';

dotenv.config();

const entities = (Object.keys(databaseEntities) as Array<keyof typeof databaseEntities>).map(
    (entity: keyof typeof databaseEntities) => databaseEntities[entity],
);

export const options: DataSourceOptions & SeederOptions =
    {
        name: 'connPostgres',
        type: 'postgres',
        host: configuration.databases.debezium.host,
        port: configuration.databases.debezium.port,
        username: configuration.databases.debezium.user,
        password: configuration.databases.debezium.password,
        database: configuration.databases.debezium.db,
        // host: env.DEBEZIUM_POSTGRES_HOST,
        // port: parseInt(env.DEBEZIUM_POSTGRES_PORT) || 5432,
        // username: env.DEBEZIUM_POSTGRES_USER,
        // password: env.DEBEZIUM_POSTGRES_PASSWORD,
        // database: env.DEBEZIUM_POSTGRES_DB,
        synchronize: false,
        migrationsRun: false,
        logging: configuration.databases.logger,
        // logging: Boolean(env.DB_LOGGER) || false,
        migrations: [path.resolve('libs/database-postgres/src/migrations/*.{ts,js}')],
        entities,
        dropSchema: false,
        seeds: [MainSeeder],
        factories: ["./libs/database-postgres/src/factories/*.factory.{ts,js}"],
        connectTimeoutMS: 60000,
        logNotifications: true,
    };

export default new DataSource(options);