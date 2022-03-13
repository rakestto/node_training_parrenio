import { createConnection, ConnectionOptions, Connection } from 'typeorm';
import { typeORMConnectionOptions } from '../../environments/development';

export default class TypeORMDatabase { 
	public databaseOptions: ConnectionOptions
	public port: string | number;
	public connection: Promise<Connection>
    
	constructor(config: typeORMConnectionOptions) {
		this.databaseOptions = config.DB
		this.port = config.PORT
		this.connection = this.createDatabaseConnection();
	}
    
	async createDatabaseConnection(): Promise<Connection> { 
		const connection: Connection = await createConnection(this.databaseOptions)
		return connection
	}
}
