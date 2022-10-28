import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationGenerated1666961886452 implements MigrationInterface {
    name = 'MigrationGenerated1666961886452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "deleteAt" TIMESTAMP, "isActive" boolean NOT NULL DEFAULT true, "username" character varying(100) NOT NULL, "email" character varying(120) NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_9b998bada7cff93fcb953b0c37e" UNIQUE ("username"), CONSTRAINT "UQ_415c35b9b3b6fe45a3b065030f5" UNIQUE ("email"), CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "deleteAt" TIMESTAMP, "isActive" boolean NOT NULL DEFAULT true, "version" integer NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "isPublished" boolean NOT NULL DEFAULT false, "userId" uuid NOT NULL, CONSTRAINT "PK_58a149c4e88bf49036bc4c8c79f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "metric_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "deleteAt" TIMESTAMP, "isActive" boolean NOT NULL DEFAULT true, "name" character varying(100) NOT NULL, CONSTRAINT "UQ_0cf236a4d8ef15d34d04a0bc1ca" UNIQUE ("name"), CONSTRAINT "PK_b8f0a89a824da3c4df1c4d43578" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "point_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "deleteAt" TIMESTAMP, "value" integer NOT NULL DEFAULT '0', "metricId" uuid NOT NULL, CONSTRAINT "PK_379572d819b8286626988338af1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tag_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "deleteAt" TIMESTAMP, "isActive" boolean NOT NULL DEFAULT true, "name" character varying(100) NOT NULL, "value" character varying NOT NULL, "metricId" uuid NOT NULL, CONSTRAINT "UQ_8f949d7a3a984759044054e89b8" UNIQUE ("name"), CONSTRAINT "PK_98efc66e2a1ce7fa1425e21e468" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "post_entity" ADD CONSTRAINT "FK_5e32998d7ac08f573cde04fbfa5" FOREIGN KEY ("userId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "point_entity" ADD CONSTRAINT "FK_52eae76cc1480abcc122acd3aaa" FOREIGN KEY ("metricId") REFERENCES "metric_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tag_entity" ADD CONSTRAINT "FK_e6dda96f86c8ce51c4a6f9460d7" FOREIGN KEY ("metricId") REFERENCES "metric_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tag_entity" DROP CONSTRAINT "FK_e6dda96f86c8ce51c4a6f9460d7"`);
        await queryRunner.query(`ALTER TABLE "point_entity" DROP CONSTRAINT "FK_52eae76cc1480abcc122acd3aaa"`);
        await queryRunner.query(`ALTER TABLE "post_entity" DROP CONSTRAINT "FK_5e32998d7ac08f573cde04fbfa5"`);
        await queryRunner.query(`DROP TABLE "tag_entity"`);
        await queryRunner.query(`DROP TABLE "point_entity"`);
        await queryRunner.query(`DROP TABLE "metric_entity"`);
        await queryRunner.query(`DROP TABLE "post_entity"`);
        await queryRunner.query(`DROP TABLE "user_entity"`);
    }

}
