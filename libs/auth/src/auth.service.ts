import { Inject, Injectable } from '@nestjs/common';
import { ILoggerService } from 'service-logger/service-logger';

const users = [
    {
        id: 'asd23f1asd3f21asdf',
        username: 'eric.cartman',
        password: '12369',
        role: 'admin',
    },
];

@Injectable()
export class AuthService {
    constructor(
        @Inject(ILoggerService) private readonly _logger: ILoggerService,) { }

    setLogger(): void {
    }
}
