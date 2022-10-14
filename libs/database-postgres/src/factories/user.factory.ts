import { UserEntity } from 'database-postgres/database-postgres';
import { define } from "typeorm-seeding";
import { faker } from '@faker-js/faker';

define(UserEntity, () => {
    const user = new UserEntity();
    user.email = faker.internet.email();
    user.username = `${faker.name.firstName()} ${faker.name.lastName()}`;
    user.password = '12369';
    return user;
});