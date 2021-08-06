import Event from "../entities/Event";
import { Repository } from "./repository/Repository";

export class EventServices extends Repository<Event> {
  constructor() {
    super("event");
  }
}
