import { configuration } from 'libs/config/src/configuration';

export const ElasticsearchConnection = {
    host: configuration().databases.elasticsearch.host,
    user: configuration().databases.elasticsearch.user,
    password: configuration().databases.elasticsearch.password,
    port: configuration().databases.elasticsearch.port
}
