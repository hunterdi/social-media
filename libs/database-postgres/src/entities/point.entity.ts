import { AutoMap } from "@automapper/classes";
import { Column, Entity, ManyToOne, RelationId } from "typeorm";
import { MetricEntity, PostgresEntity } from ".";

@Entity()
export class PointEntity extends PostgresEntity {

    @AutoMap()
    @Column({ nullable: false, default: 0 })
    value!: number;

    @AutoMap()
    @RelationId((point: PointEntity) => point.metric)
    metricId!: string;

    @AutoMap()
    @ManyToOne(() => MetricEntity, (metric) => metric.points, { nullable: false })
    metric!: Promise<MetricEntity>;
}
