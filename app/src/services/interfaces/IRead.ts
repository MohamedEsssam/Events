import { ApiResponse } from "apisauce";

export interface IRead<T> {
  getAll(...args: any[]): Promise<ApiResponse<T[]>>;
  getOne(id: string): Promise<ApiResponse<T | null>>;
}
