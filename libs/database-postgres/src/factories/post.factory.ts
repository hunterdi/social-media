import { faker } from '@faker-js/faker';
import { PostEntity } from "database-postgres/database-postgres";
import { define } from "typeorm-seeding";

define(PostEntity, () => {
    const post = new PostEntity();
    post.title = faker.lorem.text();
    post.description = faker.lorem.text();
    return post;
});