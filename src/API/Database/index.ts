import { createConnection, ConnectionOptions, Connection } from 'typeorm';
import { typeORMConnectionOptions } from '../../environments/development';

export default class TypeORMDatabase { 
	public databaseOptions: ConnectionOptions
	public port: string | number;
    
	constructor(config: typeORMConnectionOptions) {
		this.databaseOptions = config.DB
		this.port = config.PORT
	}
    
	async createDatabaseConnection(): Promise<Connection | undefined> { 
		try {
			const connection: Connection = await createConnection(this.databaseOptions)
			return connection
		} catch(e) {
			console.log(e)
		}
	}
}
