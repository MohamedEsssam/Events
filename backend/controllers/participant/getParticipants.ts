import { RequestHandler } from "express";
import { ParticipantRepository } from "../../repositories/ParticipantRepository";
import ParticipantModel from "../../models/participant";
import Participant from "../../entities/Participant";
import InternalServer from "../../exceptions/InternalServer";

const repository: ParticipantRepository = new ParticipantRepository(
  ParticipantModel
);
export const getParticipants: RequestHandler = async (req, res) => {
  try {
    const participate: Participant[] | null = await repository.getAll();

    return res.status(200).send(participate);
  } catch (error) {
    return res.status(InternalServer.httpCode).send(InternalServer);
  }
};
