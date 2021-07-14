import { RequestHandler } from "express";
import { ParticipantRepository } from "../../repositories/ParticipantRepository";
import ParticipantModel from "../../models/participant";
import Participant from "../../entities/Participant";
import BadRequest from "../../exceptions/BadRequest";
import NotFound from "../../exceptions/NotFound";
import InternalServer from "../../exceptions/InternalServer";

const repository: ParticipantRepository = new ParticipantRepository(
  ParticipantModel
);
export const updateParticipant: RequestHandler = async (req, res) => {
  const request: Participant = req.body;
  const id: string = req.params["id"];
  try {
    const participate: Participant | null = await repository.update(
      id,
      request
    );

    if (!participate) return res.status(NotFound.httpCode).send(NotFound);

    return res.status(200).send(participate);
  } catch (error) {
    if (error.message === "You entered invalid data.")
      return res.status(BadRequest.httpCode).send(BadRequest);
    else return res.status(InternalServer.httpCode).send(InternalServer);
  }
};
