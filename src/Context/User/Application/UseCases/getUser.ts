import { IUserRepository } from '../../Domain/IUserRepository';

export default class GetUserUseCase {
	private userRepository: IUserRepository;
	constructor(userRepository: IUserRepository) {
		this.userRepository = userRepository;
	}

	async run(firstName: string) {
		const user = await this.userRepository.getUserByName(firstName);
		return user;
	}

	cosa(string: string) {
		return string;
	}
}
