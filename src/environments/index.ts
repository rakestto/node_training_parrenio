import { config } from 'dotenv'
const result = config();

if (result.error) {
	throw result.error
}

import { DEVELOPMENT, typeORMConnectionOptions } from './development';
import { PRODUCTION } from './production'
import { QA } from './qa';

const { NODE_ENV } = process.env
let currentEnvironment: typeORMConnectionOptions = DEVELOPMENT

if (NODE_ENV === 'production') { 
	currentEnvironment = PRODUCTION
}else if(NODE_ENV === 'qa') {
	currentEnvironment = QA
}

export default currentEnvironment
