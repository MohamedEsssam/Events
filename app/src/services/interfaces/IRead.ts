import { ApiResponse } from "apisauce";

export interface IRead<T> {
  getAll(): Promise<ApiResponse<T[]>>;
  getOne(id: string): Promise<ApiResponse<T | null>>;
}
