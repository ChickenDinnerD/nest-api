import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableUsers1637777102550 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TYPE Role AS ENUM ('ADMIN', 'USER'); 
            CREATE TABLE users (
                id SERIAL NOT NULL PRIMARY KEY,
                username VARCHAR(255),
                password VARCHAR(255),
                role Role,
                created_at DATE
                )`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE users`
        )
    }

}
