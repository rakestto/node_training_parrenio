import { EntitySchema } from 'typeorm';
import JobRequest from '../../../Domain/JobRequest';

const JobRequest = new EntitySchema<JobRequest>({
	name: 'jobRequest',
	columns: {
		id: {
			type: 'uuid',
			primary: true,
			generated: 'uuid',
		}
	},
	relations: {
		client: {
			type: 'many-to-one',
			target: 'client'
		}
	}
})

export { JobRequest }
