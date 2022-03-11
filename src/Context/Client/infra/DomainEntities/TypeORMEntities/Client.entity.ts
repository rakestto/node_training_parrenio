import { EntitySchema } from 'typeorm';
import Client from '../../../Domain/Client';

const ClientEntity = new EntitySchema<Client>({
	name: 'client',
	columns: {
		id: {
			type: 'uuid',
			primary: true,
			generated: 'uuid',
		},
		name: {
			type: String,
		},
		country: { 
			type: String
		}
	}
})

export { ClientEntity } 
