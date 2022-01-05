import { ApiResponse } from "apisauce";
import Event from "../entities/Event";
import Client from "./client";
import { Repository } from "./repository/Repository";

export class EventServices extends Repository<Event> {
  constructor() {
    super("event");
  }

  /**overwrite getAll*/
  getAll(searchQuery: any): Promise<ApiResponse<Event[], Event[]>> {
    let filterQuery = searchQuery ? searchQuery["title"] : "";

    return Client.get(`${this.path}?title=${filterQuery}`);
  }
}
