import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity, UserRepository } from 'database-postgres/database-postgres';

@Injectable()
export class UserService {
    constructor(private readonly _userRepository: UserRepository) { }

    public async createAsync(user: UserEntity): Promise<UserEntity> {
        const response = this._userRepository.createAsync(user);
        return response;
    }

    public async updateAsync(id: string, dto: UserEntity): Promise<UserEntity> {
        const user = await this._userRepository.findOne({ id });
        const response = this._userRepository.updateAsync(user);
        return response;
    }
}
