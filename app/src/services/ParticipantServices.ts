import { ApiResponse } from "apisauce";
import User from "../entities/User";
import { Repository } from "./repository/Repository";
import Client from "./client";

export class ParticipantServices extends Repository<User> {
  constructor() {
    super("participant");
  }
  public async register(participant: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    verified: boolean;
  }): Promise<ApiResponse<string>> {
    return Client.post("/participant/register", participant);
  }
}
