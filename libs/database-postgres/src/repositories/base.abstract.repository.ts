import { IBaseRepository, PostgresEntity } from "database-postgres/database-postgres";
import { DeleteResult, FindOptionsWhereProperty, Repository } from "typeorm";

export abstract class BaseAbstractRepository<T extends PostgresEntity> implements IBaseRepository<T> {

    private entity: Repository<T>;

    protected constructor(entity: Repository<T>) {
        this.entity = entity;
    }

    public create(data: T | any): Promise<T> {
        return this.entity.save(data);
    }

    // public findOneById(id: FindOptionsWhereProperty<NonNullable<T["id"]>>): Promise<T> {
    //     return this.entity.findOneBy({ id });
    // }

    public findByCondition(filterCondition: any): Promise<T> {
        return this.entity.findOne({ where: filterCondition });
    }

    public findWithRelations(relations: any): Promise<T[]> {
        return this.entity.find(relations)
    }

    public findAll(): Promise<T[]> {
        return this.entity.find();
    }

    public update(id: string, item: T): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public remove(id: string): Promise<DeleteResult> {
        return this.entity.delete(id);
    }

}