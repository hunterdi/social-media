import { DataSource } from "typeorm";
import { runSeeder, Seeder, SeederFactoryManager } from "typeorm-extension";
import CreatePosts from "./create-posts.seed";

export class MainSeeder implements Seeder{
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        await runSeeder(dataSource, CreatePosts)
    }

}