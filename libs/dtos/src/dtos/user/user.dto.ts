import { AutoMap } from '@automapper/classes';
import { PostDTO } from '..';

export class UserDTO {
    @AutoMap()
    username!: string;

    @AutoMap()
    email!: string;

    @AutoMap()
    password!: string;

    repeatPassword?: string;

    @AutoMap(() => [PostDTO])
    posts?: PostDTO[];
}