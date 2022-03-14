import {MigrationInterface, QueryRunner} from 'typeorm';

export class Test1647196385408 implements MigrationInterface {
	name = 'Test1647196385408'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query('CREATE TABLE "candidacie" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "jobRequestId" uuid, CONSTRAINT "PK_496291042762bab7a7a29b2b1d1" PRIMARY KEY ("id"))');
		await queryRunner.query('CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "country" character varying NOT NULL, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))');
		await queryRunner.query('CREATE TABLE "job_request" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "clientId" uuid, CONSTRAINT "PK_be981b8f8d402409a3434ca5d4b" PRIMARY KEY ("id"))');
		await queryRunner.query('CREATE TABLE "placement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "candidacieId" uuid, "clientId" uuid, "userId" uuid, CONSTRAINT "PK_4f8b29ee2db5213bcb38b6c71c4" PRIMARY KEY ("id"))');
		await queryRunner.query('CREATE TYPE "public"."user_availability_enum" AS ENUM(\'FIND_WORK\', \'REQUESTED\', \'WORKING\')');
		await queryRunner.query('CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "availability" "public"."user_availability_enum" NOT NULL, "email" character varying NOT NULL, "country" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))');
		await queryRunner.query('ALTER TABLE "candidacie" ADD CONSTRAINT "FK_e80a7dcdc7c329f14259c71b42c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
		await queryRunner.query('ALTER TABLE "candidacie" ADD CONSTRAINT "FK_a6c76ae835f55d32f8d140375ec" FOREIGN KEY ("jobRequestId") REFERENCES "job_request"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
		await queryRunner.query('ALTER TABLE "job_request" ADD CONSTRAINT "FK_f3656aa1249b9494bdade7054ca" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
		await queryRunner.query('ALTER TABLE "placement" ADD CONSTRAINT "FK_795eba5490f4cd6898b841994e9" FOREIGN KEY ("candidacieId") REFERENCES "candidacie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
		await queryRunner.query('ALTER TABLE "placement" ADD CONSTRAINT "FK_0d1c9e15518a411ebed314fa226" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
		await queryRunner.query('ALTER TABLE "placement" ADD CONSTRAINT "FK_cde4bea9871e39e9e86a26c4300" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query('ALTER TABLE "placement" DROP CONSTRAINT "FK_cde4bea9871e39e9e86a26c4300"');
		await queryRunner.query('ALTER TABLE "placement" DROP CONSTRAINT "FK_0d1c9e15518a411ebed314fa226"');
		await queryRunner.query('ALTER TABLE "placement" DROP CONSTRAINT "FK_795eba5490f4cd6898b841994e9"');
		await queryRunner.query('ALTER TABLE "job_request" DROP CONSTRAINT "FK_f3656aa1249b9494bdade7054ca"');
		await queryRunner.query('ALTER TABLE "candidacie" DROP CONSTRAINT "FK_a6c76ae835f55d32f8d140375ec"');
		await queryRunner.query('ALTER TABLE "candidacie" DROP CONSTRAINT "FK_e80a7dcdc7c329f14259c71b42c"');
		await queryRunner.query('DROP TABLE "user"');
		await queryRunner.query('DROP TYPE "public"."user_availability_enum"');
		await queryRunner.query('DROP TABLE "placement"');
		await queryRunner.query('DROP TABLE "job_request"');
		await queryRunner.query('DROP TABLE "client"');
		await queryRunner.query('DROP TABLE "candidacie"');
	}

}
