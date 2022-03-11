import { EntitySchema } from 'typeorm';
import Placement from '../../../Domain/Placement';
const Placement = new EntitySchema<Placement>({
	name: 'Placement',
	columns: {
		id: {
			type: 'uuid',
			primary: true,
			generated: 'uuid',
		}
	},
	relations: {
		candidacie: {
			type: 'many-to-one',
			target: 'candidacie'
		},
		client: {
			type: 'many-to-one',
			target: 'client'
		},
		user: {
			type: 'many-to-one', 
			target: 'user'
		}
	}
})

export { Placement }
