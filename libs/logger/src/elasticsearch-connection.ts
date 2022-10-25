import { configuration } from 'libs/configuration/src/configuration';

export const ElasticsearchConnection = {
    host: configuration().databases.elasticsearch.host,
    user: configuration().databases.elasticsearch.user,
    password: configuration().databases.elasticsearch.password,
    port: configuration().databases.elasticsearch.port
}
