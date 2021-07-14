import { RequestHandler } from "express";
import { ParticipantRepository } from "../../repositories/ParticipantRepository";
import ParticipantModel from "../../models/participant";
import Participant from "../../entities/Participant";
import UserAlreadyExist from "../../exceptions/UserAlreadyExist";
import BadRequest from "../../exceptions/BadRequest";
import InternalServer from "../../exceptions/InternalServer";

const repository: ParticipantRepository = new ParticipantRepository(
  ParticipantModel
);
export const register: RequestHandler = async (req, res) => {
  const request: Participant = req.body;
  try {
    const participate: Participant | null = await repository.register(request);

    if (!participate)
      return res.status(UserAlreadyExist.httpCode).send(UserAlreadyExist);

    return res.status(200).send(participate);
  } catch (error) {
    if (error.message === "You entered invalid data.")
      return res.status(BadRequest.httpCode).send(BadRequest);
    else return res.status(InternalServer.httpCode).send(InternalServer);
  }
};
