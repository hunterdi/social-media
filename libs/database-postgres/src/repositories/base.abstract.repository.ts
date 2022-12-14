import { IBaseRepository, PostgresEntity } from "database-postgres/database-postgres";
import { DeleteResult, FindOptionsWhereProperty, Repository } from "typeorm";

export abstract class BaseAbstractRepository<T extends PostgresEntity> implements IBaseRepository<T> {

    private repository: Repository<T>;

    protected constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    public create(data: T | any): Promise<T> {
        return this.repository.save(data);
    }

    // public findOneById(id: FindOptionsWhereProperty<NonNullable<T["id"]>>): Promise<T> {
    //     return this.entity.findOneBy({ id });
    // }

    public findByCondition(filterCondition: any): Promise<T> {
        return this.repository.findOne({ where: filterCondition });
    }

    public findWithRelations(relations: any): Promise<T[]> {
        return this.repository.find(relations)
    }

    public findAll(): Promise<T[]> {
        return this.repository.find();
    }

    public update(id: string, item: T): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public remove(id: string): Promise<DeleteResult> {
        return this.repository.delete(id);
    }

}