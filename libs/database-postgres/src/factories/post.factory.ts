import { faker } from '@faker-js/faker';
import { PostEntity } from "database-postgres/database-postgres";
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(PostEntity, () => {
    const post = new PostEntity();
    post.title = faker.lorem.text();
    post.description = faker.lorem.text();
    return post;
});

// export class PostFactory extends Factory<PostEntity> {
//     protected entity: Constructable<PostEntity>;
//     protected dataSource: DataSource;
//     protected attrs(): FactorizedAttrs<PostEntity> {
//         return {
//             title: faker.lorem.text(),
//             description: faker.lorem.text()
//         };
//     }
// }
