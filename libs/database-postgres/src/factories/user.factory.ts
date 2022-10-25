import { UserEntity } from 'database-postgres/database-postgres';
import { faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import bcrypt from 'bcrypt';

export default setSeederFactory(UserEntity, async () => {
    const user = new UserEntity();
    user.email = faker.internet.email();
    user.username = `${faker.name.firstName()} ${faker.name.lastName()}`;
    user.password = await bcrypt.hash('12369', 10);
    return user;
});