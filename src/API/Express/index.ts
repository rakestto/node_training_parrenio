import TypeORMDatabase from '../Database';
import currentEnvironment from '../../environments';
import initContainer from '../../../DIContainer';

const startServer = async () => {
	const database = new TypeORMDatabase(currentEnvironment);
	const dbConnection = (await database.connection)
	const container = await initContainer(dbConnection)
	const server = container.cradle.server
	server.listen();
};

startServer();
