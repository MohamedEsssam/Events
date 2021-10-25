import { IRead } from "../interfaces/IRead";
import { IWrite } from "../interfaces/IWrite";
import { ApiResponse } from "apisauce";
import Client from "../client";

export abstract class Repository<T> implements IWrite<T>, IRead<T> {
  constructor(protected path: string) {}
  create(item: T): Promise<ApiResponse<T | null, T | null>> {
    return Client.post(`${this.path}`, item);
  }
  update(id: string, item: T): Promise<ApiResponse<T | null, T | null>> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<ApiResponse<T | null>> {
    throw new Error("Method not implemented.");
  }
  async getAll(): Promise<ApiResponse<T[]>> {
    return Client.get(this.path);
  }
  getOne(id: string): Promise<ApiResponse<T | null>> {
    return Client.get(`${this.path}/${id}`);
  }
}
