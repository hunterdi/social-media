import { Module } from '@nestjs/common';
import { ConfigurationElasticsearch } from './configuration-elasticsearch.service';
import { DatabaseElasticsearchService } from './database-elasticsearch.service';

@Module({
  providers: [DatabaseElasticsearchService, ConfigurationElasticsearch],
  exports: [DatabaseElasticsearchService, ConfigurationElasticsearch],
})
export class DatabaseElasticsearchModule {}
