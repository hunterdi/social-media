import { PostEntity, UserEntity } from "database-postgres/database-postgres";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreatePosts implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        const users = await factory(UserEntity)().createMany(10);
        const posts = await factory(PostEntity)().map(async (post: PostEntity) => {
            post.user = Promise.resolve(users[Math.floor(Math.random() * users.length)]);
            return post;
        }).createMany(100);
    }
}