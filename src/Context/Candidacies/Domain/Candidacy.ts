import JobRequest from '../../JobRequest/Domain/JobRequest'
import { User } from '../../User/Domain/User'

export default interface Candidacy {
    id: number, 
    jobRequest: JobRequest,
    status: string,
    user: User
}
