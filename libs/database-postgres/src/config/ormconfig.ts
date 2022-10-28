import { configuration } from '../../../configuration/src';
import * as path from 'path';
import { DataSource } from "typeorm";
import * as databaseEntities from '../entities';
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from '../seeders';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const entities = (Object.keys(databaseEntities) as Array<keyof typeof databaseEntities>).map(
    (entity: keyof typeof databaseEntities) => databaseEntities[entity],
);

export const options: SeederOptions & PostgresConnectionOptions =
    {
        name: 'connPostgres',
        type: 'postgres',
        host: configuration.databases.debezium.host,
        port: configuration.databases.debezium.port,
        username: configuration.databases.debezium.user,
        password: configuration.databases.debezium.password,
        database: configuration.databases.debezium.db,
        synchronize: false,
        migrationsRun: false,
        logging: configuration.databases.logger,
        migrations: [path.resolve('libs/database-postgres/src/migrations/*.{ts,js}')],
        entities,
        dropSchema: false,
        seeds: [MainSeeder],
        factories: ["./libs/database-postgres/src/factories/*.factory.{ts,js}"],
        connectTimeoutMS: 60000,
        logNotifications: true,
    };

export default new DataSource(options);
