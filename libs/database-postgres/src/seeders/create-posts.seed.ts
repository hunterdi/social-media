import { PostEntity, UserEntity } from "database-postgres/database-postgres";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { faker } from '@faker-js/faker';

export default class CreatePosts implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        const userFactory = factoryManager.get(UserEntity);
        const users = await userFactory.saveMany(5);
        const postRepository = dataSource.getRepository(PostEntity);
        const posts = users.map(user => {
            const post = new PostEntity();
            post.title = faker.lorem.text();
            post.description = faker.lorem.text();
            // post.user = Promise.resolve(users[Math.floor(Math.random() * users.length)]);
            post.user = Promise.resolve(user);
            return postRepository.save(post);
        });

        await Promise.all(posts);
    }
}