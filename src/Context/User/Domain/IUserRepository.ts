export interface IRepository<Entity> {
  findById(id: string): Promise<Entity | undefined>;
}
