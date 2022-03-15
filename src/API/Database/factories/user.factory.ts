import faker, { Faker } from '@faker-js/faker'
import { define } from 'typeorm-seeding'
import { UserEntity } from '../../../Context/User/Infra/DomainEntities/TypeORMEntities/user.entity'
const user = UserEntity.options.columns

define(user, (faker: typeof Faker) => { 
	const name = faker.name;
})
