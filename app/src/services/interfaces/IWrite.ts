import { ApiResponse } from "apisauce";

export interface IWrite<T> {
  create(item: T): Promise<ApiResponse<T | null>>;
  update(id: string, item: T): Promise<ApiResponse<T | null>>;
  delete(id: string): Promise<ApiResponse<T | null>>;
}
