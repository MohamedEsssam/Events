export interface IRead<T> {
  getAll(item: T): Promise<T[]>;
  getOne(id: string): Promise<T | null>;
}
