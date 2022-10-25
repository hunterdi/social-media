require('dotenv').config();

export const configuration: EnvironmentVariables = {
    env: (process.env.ENV as any) || 'dev',
    apiPort: parseInt(process.env.API_PORT) || 3000,
    logFilename: (process.env.LOG_FILE_NAME),
    databases: {
        logger: Boolean(process.env.DB_LOGGER) || false,
        postgres: {
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT) || 5432,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            db: process.env.POSTGRES_DB
        },
        timescale: {
            host: process.env.TIMESCALE_HOST,
            port: parseInt(process.env.TIMESCALE_PORT) || 5433,
            user: process.env.TIMESCALE_USER,
            password: process.env.TIMESCALE_PASSWORD,
            db: process.env.TIMESCALE_DB
        },
        elasticsearch: {
            host: process.env.ELASTIC_HOST,
            port: parseInt(process.env.ELASTIC_PORT) || 9200,
            user: process.env.ELASTIC_USERNAME,
            password: process.env.ELASTIC_PASSWORD
        },
        debezium: {
            host: process.env.DEBEZIUM_POSTGRES_HOST,
            port: parseInt(process.env.DEBEZIUM_POSTGRES_PORT) || 5434,
            user: process.env.DEBEZIUM_POSTGRES_USER,
            password: process.env.DEBEZIUM_POSTGRES_PASSWORD,
            db: process.env.DEBEZIUM_POSTGRES_DB
        }
    },
    keycloak: {
        secretkey: process.env.KEYCLOACK_SECRETKEY
    },
};

type EnvironmentVariables = {
    env: string;
    apiPort: number;
    logFilename: string;
    databases: database;
    keycloak: keycloak;
}

type database = {
    postgres: postgres;
    timescale: timescale;
    elasticsearch: elasticsearch;
    debezium: debezium;
    logger: boolean;
}

type postgres = {
    host: string;
    port: number;
    user: string;
    password: string;
    db: string;
}

type timescale = {
    host: string;
    port: number;
    user: string;
    password: string;
    db: string;
}

type elasticsearch = {
    host: string;
    port: number;
    user: string;
    password: string;
}

type keycloak = {
    secretkey: string;
}

type debezium = {
    host: string;
    port: number;
    user: string;
    password: string;
    db: string;
}