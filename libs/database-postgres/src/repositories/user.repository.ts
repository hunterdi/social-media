import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "..";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
    public async createAsync(user: UserEntity): Promise<UserEntity> {
        await user.save();
        return user;
    }

    public async updateAsync(user: UserEntity): Promise<UserEntity> {
        await user.save();
        return user;
    }
}
