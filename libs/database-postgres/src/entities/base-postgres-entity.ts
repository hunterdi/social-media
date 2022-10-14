import { AutoMap } from "@automapper/classes";
import { BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";

export abstract class PostgresEntity extends BaseEntity {
    @AutoMap()
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @AutoMap()
    @CreateDateColumn({ nullable: false })
    createdAt!: Date;

    @AutoMap()
    @UpdateDateColumn({ default: null })
    updatedAt?: Date;

    @Column({ default: null })
    deleteAt?: Date;
}

export abstract class PostgresActiveEntity extends PostgresEntity {
    @AutoMap()
    @Column({ default: true })
    isActive!: boolean;
}

export abstract class PostgresVersionEntity extends PostgresEntity {
    @AutoMap()
    @VersionColumn({ nullable: false })
    version!: number;
}

export abstract class PostgresVersionActiveEntity extends PostgresActiveEntity {
    @AutoMap()
    @VersionColumn({ nullable: false })
    version!: number;
}