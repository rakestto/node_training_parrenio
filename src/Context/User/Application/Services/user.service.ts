import { IUserRepository } from '../../Domain/IUserRepository';
import {User} from '../../Domain/User'

interface IUserService { 
	findById: (id: string) => Promise<User>
}

class UserService implements IUserService {
	private userRepository: IUserRepository;

	constructor(userRepository: IUserRepository) {
		this.userRepository = userRepository;
	}

	async findById(id: string): Promise<User> {
		const user = await this.userRepository.findById(id);
		return user;
	}
}

export default UserService
