import { Request, Response, Router } from 'express';
import UserRouter from './User/User.route';

export default class ApiRouter {
	private apiRouter: Router;
	private userRouter: UserRouter;
	constructor(userRouter: UserRouter) {
		this.apiRouter = Router();
		this.userRouter = userRouter;
	}

	createRoutes() {
		this.apiRouter.use('/status', (req: Request, res: Response) => {
			res.send({ status: 'Hola que tal' });
		});

		this.apiRouter.use('/user', this.userRouter.getRoutes());
		// this.apiRouter.use("/product", this.productRouter.getRoutes())

		return this.apiRouter;
	}
}
