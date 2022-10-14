import { Injectable } from '@nestjs/common';

@Injectable()
export class SgaService {
  getHello(): string {
    return 'Hello World!';
  }
}
