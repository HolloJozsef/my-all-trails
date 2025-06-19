import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTrailType1750144281776 implements MigrationInterface {
    name = 'AddTrailType1750144281776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trails" ADD "type" character varying NOT NULL DEFAULT 'hiking'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trails" DROP COLUMN "type"`);
    }

}
