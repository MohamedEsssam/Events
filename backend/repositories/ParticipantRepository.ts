import { Repository } from "./repository/Repository";
import Participant from "../entities/Participant";
import { EnforceDocument } from "mongoose";

export class ParticipantRepository extends Repository<Participant> {
  public async register(participant: Participant): Promise<Participant | null> {
    let createdParticipant = await this.model.findOne({
      email: participant["email"],
    });
    if (createdParticipant) return null;

    createdParticipant = new this.model(participant);

    return await createdParticipant.save();
  }

  public async participate(
    id: string,
    eventId: string
  ): Promise<Participant | null> {
    let existParticipant = await this.model.findById({
      _id: id,
    });
    if (!existParticipant) return null;

    existParticipant.events?.push(eventId);

    return (await existParticipant?.save()) as EnforceDocument<Participant, {}>;
  }

  public async unParticipate(
    id: string,
    eventId: string
  ): Promise<Participant | null> {
    let existParticipant = await this.model.findById({
      _id: id,
    });
    if (!existParticipant) return null;

    existParticipant.events?.splice(
      existParticipant.events?.indexOf(eventId),
      1
    );

    return (await existParticipant?.save()) as EnforceDocument<Participant, {}>;
  }
}
