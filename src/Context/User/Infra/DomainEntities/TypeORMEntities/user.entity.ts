import { EntitySchema } from 'typeorm';
import {User, AvailabilityUser} from '../../../Domain/User';

const UserEntity = new EntitySchema<User>({
	name: 'user',
	columns: {
		id: {
			type: 'uuid',
			primary: true,
			generated: 'uuid',
		},
		name: {
			type: String,
		},
		availability: {
			type: 'enum',
			enum: AvailabilityUser
		},
		email: { 
			type: String
		},
		country: { 
			type: String
		},
		password: {
			type: String
		}
	}
})

export { UserEntity }
