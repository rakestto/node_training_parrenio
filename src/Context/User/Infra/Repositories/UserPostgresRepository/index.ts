import { IUserRepository } from '../../../Domain/IUserRepository';

export type User = { userName: string; apellidos: string; type: string };

export default class UserPostgresSQLRepository implements IUserRepository {
	private _users: Array<User>;
	constructor() {
		this._users = [
			{ userName: 'parreno', apellidos: 'Garcia Parreño', type: 'Postgres' },
			{ userName: 'joseja', apellidos: 'Martinez Domene', type: 'Postgres' },
			{ userName: 'parreno', apellidos: 'Garcia Parreño', type: 'Postgres' },
		];
	}

	async getUserByName(name: string): Promise<User[]> {
		return await this._users.filter((user) => user.userName === name);
	}
}
