import { IRead } from "./interfaces/IRead";
import { IWrite } from "./interfaces/IWrite";
import User from "../entities/User";
import UserModel from "../models/user";

export class UserRepository<T extends User> implements IWrite<T>, IRead<T> {
  async create(user: T): Promise<T | null> {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: T): Promise<T | null> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<T | null> {
    throw new Error("Method not implemented.");
  }
  getAll(item: T): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  getOne(id: string): Promise<T | null> {
    throw new Error("Method not implemented.");
  }
}
