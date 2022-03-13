import { IRepository } from '../../Domain/IUserRepository';
import {User} from '../../Domain/User'

interface IUserService { 
	findById: (id: string) => Promise<User | undefined>
}

class UserService implements IUserService {
	private userRepository: IRepository<User>;

	constructor(userRepository: IRepository<User>) {
		this.userRepository = userRepository;
	}

	async findById(id: string): Promise<User | undefined> {
		const user = await this.userRepository.findById(id);
		return user;
	}
}

export default UserService
