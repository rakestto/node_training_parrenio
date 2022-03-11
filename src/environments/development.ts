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
		database: 'node_training',
		entities: ['./src/Context/**/Infra/DomainEntities/TypeORMEntities/**/*.entity.ts'],
		synchronize: true
	}
}
