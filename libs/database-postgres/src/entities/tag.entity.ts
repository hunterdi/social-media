import { AutoMap } from "@automapper/classes";
import { Column, Entity, ManyToOne, RelationId } from "typeorm";
import { MetricEntity, PostgresVersionActiveEntity } from ".";

@Entity()
export class TagEntity extends PostgresVersionActiveEntity {

    @AutoMap()
    @Column({ length: 100, unique: true, nullable: false })
    name!: string;

    @AutoMap()
    @Column({ unique: false, nullable: false })
    value!: string | Date | number;

    @AutoMap()
    @RelationId((tag: TagEntity) => tag.metric)
    metricIds!: string[];

    @AutoMap()
    @ManyToOne(() => MetricEntity, (metric) => metric.tags, { nullable: false })
    metric!: Promise<MetricEntity>;
}
