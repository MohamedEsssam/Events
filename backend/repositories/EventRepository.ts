import { Repository } from "./repository/Repository";
import Event from "../entities/Event";

export abstract class EventRepository extends Repository<Event> {}
