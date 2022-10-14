import { AutoMap } from "@automapper/classes";
import { Column, Entity, OneToMany, RelationId } from "typeorm";
import { PointEntity, PostgresActiveEntity, TagEntity } from ".";

@Entity()
export class MetricEntity extends PostgresActiveEntity {

    @AutoMap()
    @Column({ length: 100, unique: true, nullable: false })
    name!: string;

    @AutoMap()
    @RelationId((metric: MetricEntity) => metric.tags)
    tagIds!: string[];

    @AutoMap()
    @OneToMany(() => TagEntity, (tag) => tag.metric, { nullable: false })
    tags!: Promise<TagEntity[]>;

    @AutoMap()
    @RelationId((metric: MetricEntity) => metric.points)
    pointIds?: string[];

    @AutoMap()
    @OneToMany(() => PointEntity, (point) => point.metric, { nullable: true })
    points?: Promise<PointEntity[]>;
}
