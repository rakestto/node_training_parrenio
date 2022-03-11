import { Request, Response } from 'express';
import GetUserUseCase from '../../../../Context/User/Application/UseCases/getUser';
import { IController } from '../IController';

export default class GetUserController implements IController {
	private getUserUseCase: GetUserUseCase;

	constructor(getUserUseCase: GetUserUseCase) {
		this.getUserUseCase = getUserUseCase;
	}

	async run(req: Request, res: Response) {
		const userName = req.params.userName;
		const result = await this.getUserUseCase.run(userName);
		res.send({
			controller: result,
		});
	}
}
