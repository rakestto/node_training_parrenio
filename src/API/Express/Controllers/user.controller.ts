import { Request, Response } from 'express';
import UserService from '../../../Context/User/Application/Services/user.service';

export default class UserController  {
	private userService: UserService

	constructor(userService: UserService) {
		this.userService = userService;
	}

	findById(req: Request, res: Response) {
		const user_id:string = req.params.user_id
		const result = this.userService.findById(user_id)
		res.send(result)
	}

}
