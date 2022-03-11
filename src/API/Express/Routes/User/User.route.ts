import { Router } from 'express';
import GetUserController from '../../Controllers/User/GetUser.controller';

export default class UserRouter {
	private router: Router;
	private getUserController: GetUserController;
	constructor(getUserController: GetUserController) {
		this.router = Router();
		this.getUserController = getUserController;
		this.createRoutes();
	}

	createRoutes() {
		this.router.get('/:userName', (req, res) =>
			this.getUserController.run(req, res)
		);
	}

	getRoutes() {
		return this.router;
	}
}
