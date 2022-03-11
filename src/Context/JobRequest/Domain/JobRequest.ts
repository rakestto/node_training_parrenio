import Candidacy from '../../Candidacies/Domain/Candidacy';
import Client from '../../Client/Domain/Client';

export default interface JobRequest {
    id: number,
    candidacies: Candidacy,
    client: Client
}
