import { ApiResponse } from "apisauce";
import { Repository } from "./repository/Repository";
import Client from "./client";
import Participant from "../entities/Participant";

export class ParticipantServices extends Repository<Participant> {
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
