import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';
import { Producer, RecordMetadata } from 'kafkajs';
import { SgaService } from './sga.service';

@Controller('sga')
export class SgaController {
  constructor(private readonly sgaService: SgaService, @Inject('KAFKA_PRODUCER') private readonly _kafkaProducer: Producer) { }

  @Get()
  getHello(): string {
    return this.sgaService.getHello();
  }

  @MessagePattern('auth')
  consumer(@Payload() message: KafkaMessage): void {
    console.log(message);
  }

  @Post('producer')
  async producer(@Body() body: any): Promise<RecordMetadata[]> {
    const response: RecordMetadata[] = await this._kafkaProducer.send({
      topic: 'auth',
      messages: [{ key: 'login', value: JSON.stringify(body) }],
    });

    return response;
  }
}
