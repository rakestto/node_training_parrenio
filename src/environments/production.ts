import { typeORMConnectionOptions } from './development';

export const PRODUCTION: typeORMConnectionOptions = { 
	PORT: process.env.PORT || 4000,
	DB: {
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'rakestto',
		password: '12345',
		database: 'node_training'
	}
}
