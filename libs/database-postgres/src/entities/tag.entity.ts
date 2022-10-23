import { AutoMap } from "@automapper/classes";
import { Column, Entity, ManyToOne, RelationId } from "typeorm";
import { MetricEntity, PostgresActiveEntity } from ".";

@Entity()
export class TagEntity extends PostgresActiveEntity {

    @AutoMap()
    @Column({ length: 100, unique: true, nullable: false })
    name!: string;

    @AutoMap()
    @Column({ unique: false, nullable: false })
    value!: string;

    @AutoMap()
    @RelationId((tag: TagEntity) => tag.metric)
    metricId!: string;

    @AutoMap()
    @ManyToOne(() => MetricEntity, (metric) => metric.tags, { nullable: false })
    metric!: Promise<MetricEntity>;
}
