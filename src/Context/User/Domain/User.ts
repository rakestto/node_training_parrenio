import Candidacy from '../../Candidacies/Domain/Candidacy';

export interface User {
  id: number;
  name: string;
  availability: string;
  email: number;
  country: string,
  password: string,
  candidacies: Candidacy[],
}

export enum AvailabilityUser{
  FIND_WORK = 'FIND_WORK',
  REQUESTED = 'REQUESTED',
  WORKING = 'WORKING',
}
