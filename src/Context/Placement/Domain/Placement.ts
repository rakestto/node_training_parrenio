import Candidacy from '../../Candidacies/Domain/Candidacy';
import Client from '../../Client/Domain/Client';
import { User } from '../../User/Domain/User';

export default interface Placement {
    id: number,
    candidacie: Candidacy,
    user: User,
    client: Client
}
