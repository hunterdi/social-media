
import { Catch, ArgumentsHost } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { BaseExceptionFilter } from './base-exception-filter';

@Catch()
export class ExceptionsLoggerFilter extends BaseExceptionFilter {
  constructor(_httpAdapterHost: HttpAdapterHost) {
    super(_httpAdapterHost);
  }
  catch(exception: unknown, host: ArgumentsHost) {
    console.log('Exception thrown', exception);
    super.catch(exception, host);
  }
}