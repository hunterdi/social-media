import { configuration } from '../../../configuration/src';
import { registerAs } from "@nestjs/config";
import * as databaseEntities from '../entities';
import { MainSeeder } from '../seeders';
import * as path from 'path';

const entities = (Object.keys(databaseEntities) as Array<keyof typeof databaseEntities>).map(
    (entity: keyof typeof databaseEntities) => databaseEntities[entity],
);

export default registerAs('database', () => ({
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
}));

// https://docs.nestjs.com/techniques/configuration
