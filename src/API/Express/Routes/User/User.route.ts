import { Router } from 'express';
import UserController from '../../Controllers/user.controller';
export default class UserRouter {
	private router: Router;
	private userController: UserController;
	constructor(userController: UserController) {
		this.router = Router();
		this.userController = userController;
		this.createRoutes();
	}

	createRoutes() {
		this.router.get('/:user_id', (req, res) =>
			this.userController.findById(req, res)
		);
	}

	getRoutes() {
		return this.router;
	}
}
