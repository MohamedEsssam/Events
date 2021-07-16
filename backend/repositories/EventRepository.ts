import { Repository } from "./repository/Repository";
import Event from "../entities/Event";
import { EnforceDocument } from "mongoose";
import { validateEventSchema } from "../schemas/EventSchema";
import BadRequest from "../exceptions/BadRequest";
import { OrganizationRepository } from "./OrganizationRepository";
import OrganizationModel from "../models/organization";

export class EventRepository extends Repository<Event> {
  private organizationRepository = new OrganizationRepository(
    OrganizationModel
  );
  /**Override method create */
  public async create(event: Event): Promise<Event | null> {
    const { error } = validateEventSchema(event);
    if (error) throw new Error(BadRequest.description);

    const createdEvent = new this.model(event);

    await this.organizationRepository.addEvent(
      createdEvent["owner"],
      createdEvent["_id"]
    );

    return (await createdEvent.save()) as EnforceDocument<Event, {}>;
  }

  public async addParticipant(id: string, userId: string): Promise<boolean> {
    const existEvent = await this.model.findById({ _id: id });
    if (!existEvent) return false;

    existEvent?.participants?.push(userId);
    await existEvent.save();

    return true;
  }

  public async removeParticipant(id: string, userId: string): Promise<boolean> {
    const existEvent = await this.model.findById({ _id: id });
    if (!existEvent) return false;

    existEvent.participants?.splice(
      existEvent.participants?.indexOf(userId),
      1
    );

    await existEvent.save();

    return true;
  }
}
