import { Injectable } from "@nestjs/common";
import { ElasticsearchOptionsFactory, ElasticsearchModuleOptions } from "@nestjs/elasticsearch";
import { configuration } from "libs/configuration/src/configuration";

@Injectable()
export class ConfigurationElasticsearch implements ElasticsearchOptionsFactory {
    createElasticsearchOptions(): ElasticsearchModuleOptions {
        const node = `http://${configuration().databases.elasticsearch.user}:${configuration().databases.elasticsearch.password}@${configuration().databases.elasticsearch.host}:${configuration().databases.elasticsearch.port}`;
        return { node };
    }

}