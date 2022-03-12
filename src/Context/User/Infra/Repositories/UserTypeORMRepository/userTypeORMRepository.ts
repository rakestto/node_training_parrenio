import { getRepository, Repository } from 'typeorm';
import { UserEntity } from '../../DomainEntities/TypeORMEntities/user.entity';
import { User } from '../../../Domain/User';
import { IRepository } from '../../../Domain/IUserRepository';

export default class UserTyperORMRepository implements IRepository<User> { 
	private userRepository: Repository<User>
	constructor() {
		this.userRepository = getRepository(UserEntity)
	}

	async findById(id: string): Promise<User | undefined> {
		const user = this.userRepository.findOne(id)
		return user
	}
}
