import { AutoMap } from "@automapper/classes";
import { Column, Entity, OneToMany, RelationId } from "typeorm";
import { PostEntity, PostgresActiveEntity } from ".";

@Entity()
export class UserEntity extends PostgresActiveEntity {
    @AutoMap()
    @Column({ length: 100, unique: true, nullable: false })
    username!: string;
    
    @AutoMap()
    @Column({ length: 120, unique: true, nullable: false })
    email!: string;

    @AutoMap()
    @Column({ nullable: false })
    password!: string;

    @AutoMap()
    @RelationId((user: UserEntity) => user.posts)
    postIds?: string[];

    @AutoMap()
    @OneToMany(() => PostEntity, (post) => post.user, { nullable: true })
    posts?: Promise<PostEntity[]>;
}
