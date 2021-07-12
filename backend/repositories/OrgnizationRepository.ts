import { IRead } from "./interfaces/IRead";
import { IWrite } from "./interfaces/IWrite";
import Organization from "../entities/Organization";

export abstract class OrganizationRepository<T extends Organization>
  implements IWrite<T>, IRead<T>
{
  create(item: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
  getAll(item: T): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  getOne(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
