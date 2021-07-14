import { RequestHandler } from "express";
import { ParticipantRepository } from "../../repositories/ParticipantRepository";
import ParticipantModel from "../../models/participant";
import Participant from "../../entities/Participant";
import NotFound from "../../exceptions/NotFound";
import InternalServer from "../../exceptions/InternalServer";

const repository: ParticipantRepository = new ParticipantRepository(
  ParticipantModel
);
export const unParticipate: RequestHandler = async (req, res) => {
  const id: string = req.body["id"];
  const eventId: string = req.body["eventId"];
  try {
    const participate: Participant | null = await repository.unParticipate(
      id,
      eventId
    );

    if (!participate) return res.status(NotFound.httpCode).send(NotFound);

    return res.status(200).send(participate);
  } catch (error) {
    return res.status(InternalServer.httpCode).send(InternalServer);
  }
};
