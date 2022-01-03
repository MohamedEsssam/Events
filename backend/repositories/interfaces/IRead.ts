export interface IRead<T> {
  getAll(item: T): Promise<T[] | null>;
  getOne(id: string): Promise<T | null>;
}
