import container from '../../../DIContainer';
import TypeORMDatabase from '../Database';

const startServer = async () => {
	const server = container.cradle.server;
	const database: TypeORMDatabase = container.cradle.database;
	await database.createDatabaseConnection().then(con => {
		console.log(con?.isConnected)
		con?.synchronize();
	})
	server.listen();
};

startServer();
