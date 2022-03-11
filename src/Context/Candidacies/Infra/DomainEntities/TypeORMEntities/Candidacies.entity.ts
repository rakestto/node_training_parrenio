import { EntitySchema } from 'typeorm';
import Candidacy from '../../../Domain/Candidacy';

const CandidacyEntity = new EntitySchema<Candidacy>({
	name: 'candidacie',
	columns: {
		id: {
			type: 'uuid',
			primary: true,
			generated: 'uuid',
		},
	},
	relations: {
		user: {
			type: 'many-to-one',
			target: 'user'
		},
		jobRequest: {
			type: 'many-to-one',
			target: 'jobRequest'
		}
	}
})

export { CandidacyEntity }
