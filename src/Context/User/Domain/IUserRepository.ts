import { User } from '../Infra/Repositories/UserPostgresRepository';

export interface IUserRepository {
  getUserByName(name: string): Promise<User[]>;
}
