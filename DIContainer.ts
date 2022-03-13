import { asClass, asValue, AwilixContainer, createContainer } from 'awilix';
import UserController from './src/API/Express/Controllers/user.controller';
import ApiRouter from './src/API/Express/Routes';
import UserRouter from './src/API/Express/Routes/User/User.route';
import { Server } from './src/API/Express/Server';
import UserService from './src/Context/User/Application/Services/user.service';
import UserTyperORMRepository from './src/Context/User/Infra/Repositories/UserTypeORMRepository/userTypeORMRepository';
import { Connection } from 'typeorm';


const initContainer = async (databaseConection: Connection): Promise<AwilixContainer> => { 
	const container = createContainer({
		injectionMode: 'CLASSIC',
	});

	container.register({
		router: asClass(ApiRouter).singleton(),
		server: asClass(Server).singleton(),
		port: asValue('4000'),
	});

	container.register({
		userRouter: asClass(UserRouter).singleton().singleton(),
	});

	container.register({
		userController: asClass(UserController).singleton(),
	});

	container.register({
		userService: asClass(UserService).singleton(),
	});

	if (databaseConection){
		container.register({
			userRepository: asClass(UserTyperORMRepository).singleton(),
		});
	}

	//console log for view current registrations in console.
	console.log(container.registrations);

	return container

}

export default initContainer;
