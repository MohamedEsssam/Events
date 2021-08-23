import { ApiResponse } from "apisauce";
import User from "../entities/User";
import { Repository } from "./repository/Repository";
import Client from "./client";

export class UserServices extends Repository<User> {
  constructor() {
    super("user");
  }
  public async login(user: {
    email: string;
    password: string;
  }): Promise<ApiResponse<string>> {
    return Client.post("/user/login", user);
  }
}
