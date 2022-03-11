export default class UserMySLQRepository {
	private _users: { userName: string; apellidos: string; type: string }[];
	constructor() {
		this._users = [
			{ userName: 'parreno', apellidos: 'Garcia Parreño', type: 'MySQL' },
			{ userName: 'joseja', apellidos: 'Martinez Domene', type: 'MySQL' },
			{ userName: 'parreno', apellidos: 'Garcia Parreño', type: 'MySQL' },
		];
	}

	getUserByName(name: string) {
		return this._users.find((user) => user.userName === name);
	}
}
