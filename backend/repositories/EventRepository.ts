import { Repository } from "./repository/Repository";
import Event from "../entities/Event";
import { EnforceDocument } from "mongoose";
import { validateEventSchema } from "../schemas/EventSchema";
import BadRequest from "../exceptions/BadRequest";

export class EventRepository extends Repository<Event> {
  /**Override method create */
  public async create(event: Event): Promise<Event | null> {
    const { error } = validateEventSchema(event);
    if (error) throw new Error(BadRequest.description);

    const createdEvent = new this.model(event);

    return (await createdEvent.save()) as EnforceDocument<Event, {}>;
  }
}
