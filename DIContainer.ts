import { asClass, asValue, createContainer } from 'awilix';
import TypeORMDatabase from './src/API/Database';
import GetUserController from './src/API/Express/Controllers/user.controller';
import ApiRouter from './src/API/Express/Routes';
import UserRouter from './src/API/Express/Routes/User/User.route';
import { Server } from './src/API/Express/Server';
import UserUseCases from './src/Context/User/Application/Services/user.service';
import currentEnvironment from './src/environments/index'

const container = createContainer({
	injectionMode: 'CLASSIC',
});

container.register({
	config: asValue(currentEnvironment),
	database: asClass(TypeORMDatabase).singleton(),
	router: asClass(ApiRouter).singleton(),
	server: asClass(Server).singleton(),
	port: asValue('4000'),
});

container.register({
	userRouter: asClass(UserRouter).singleton().singleton(),
});

container.register({
	getUserController: asClass(GetUserController).singleton(),
});

container.register({
	userUseCases: asClass(UserUseCases),
});

container.register({
	// userRepository: asClass(UserPostgresSQLRepository).singleton(),
});

//console log for view current registrations in console.
console.log(container.registrations);

export default container;
