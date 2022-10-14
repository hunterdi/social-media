import { Producer } from 'kafkajs';
import { Module } from '@nestjs/common';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { SgaController } from './sga.controller';
import { SgaService } from './sga.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['broker:29092'],
          }
        }
      }
    ]),
  ],
  controllers: [SgaController],
  providers: [SgaService,
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (kafkaService: ClientKafka): Promise<Producer> => {
        return kafkaService.connect();
      },
      inject: ['KAFKA_SERVICE']
    }
  ],
})
export class SgaModule { }
