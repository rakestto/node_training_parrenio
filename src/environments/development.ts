import { ConnectionOptions } from 'typeorm';


export interface typeORMConnectionOptions {
	PORT: string | number,
	DB: ConnectionOptions
}

export const DEVELOPMENT: typeORMConnectionOptions = {
	PORT: process.env.PORT || 4000,
	DB: {
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'admin',
		password: 'admin',
		database: 'dev_training',
		entities: ['./src/Context/**/Infra/DomainEntities/TypeORMEntities/**/*.entity.ts'],
		synchronize: true,
		migrations: ['./src/API/Database/migrations/*.migration.ts'],
		cli: {
			migrationsDir: '../API/Database/migrations'
		}
	}
}
