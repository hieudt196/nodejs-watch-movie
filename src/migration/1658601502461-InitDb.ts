import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDb1658601502461 implements MigrationInterface {
  name = 'InitDb1658601502461';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "movie" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_deleted" boolean NOT NULL DEFAULT false, "name" text NOT NULL, "category" text NOT NULL, "image" text NOT NULL, "link" text NOT NULL, CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_role_enum" AS ENUM('SuperAdmin', 'Admin', 'User')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_deleted" boolean NOT NULL DEFAULT false, "name" text NOT NULL, "email" text NOT NULL, "phone" text, "password" text NOT NULL, "refreshToken" text, "role" "public"."user_role_enum" NOT NULL DEFAULT 'User', CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `INSERT INTO "user" (name, email, password, role, created_at, updated_at) VALUES ('Super Admin', 'admin@admin.com', '123456', 'SuperAdmin', '2022-07-23T00:00:00.000Z', '2022-07-23T00:00:00.000Z')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    await queryRunner.query(`DROP TABLE "movie"`);
  }
}
