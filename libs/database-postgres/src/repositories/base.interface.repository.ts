import { PostgresEntity } from "database-postgres/database-postgres";
import { DeleteResult, FindOptionsWhereProperty } from "typeorm";

export interface IBaseRepository<T extends PostgresEntity> {
    create(data: T): Promise<T>;
    
    // findOneById(id: FindOptionsWhereProperty<NonNullable<T["id"]>>): Promise<T>;
    
    findByCondition(filterCondition: any): Promise<T>;
    
    findAll(): Promise<T[]>;
    
    findWithRelations(relations: any): Promise<T[]>;

    update(id: string, item: T): Promise<void>;

    remove(id: string): Promise<DeleteResult>;

}