import { AutoMap } from "@automapper/classes";
import { Column, Entity, ManyToOne, RelationId } from "typeorm";
import { PostgresVersionActiveEntity, UserEntity } from ".";

@Entity()
export class PostEntity extends PostgresVersionActiveEntity {
    @AutoMap()
    @Column({ nullable: false })
    title!: string;

    @AutoMap()
    @Column({ nullable: false })
    description!: string;

    @AutoMap()
    @Column({ type: "boolean", default: false, nullable: false })
    isPublished!: boolean;

    @AutoMap()
    @RelationId((post: PostEntity) => post.user)
    userId!: string;

    @AutoMap()
    @ManyToOne(() => UserEntity, (user) => user.posts, { nullable: false })
    user!: Promise<UserEntity>;
}