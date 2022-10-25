import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from '.';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: []
    })
  ]
})
export class ConfigurationModule {}
