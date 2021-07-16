import { RequestHandler } from "express";
import { SocketIo } from "../../startup/socket.io";
import { ParticipantRepository } from "../../repositories/ParticipantRepository";
import ParticipantModel from "../../models/participant";
import Participant from "../../entities/Participant";
import BadRequest from "../../exceptions/BadRequest";
import NotFound from "../../exceptions/NotFound";
import InternalServer from "../../exceptions/InternalServer";

const repository: ParticipantRepository = new ParticipantRepository(
  ParticipantModel
);
const io = new SocketIo();
export const updateParticipant: RequestHandler = async (req, res) => {
  const request: Participant = req.body;
  const id: string = req.params["id"];
  try {
    const participant: Participant | null = await repository.update(
      id,
      request
    );

    if (!participant) return res.status(NotFound.httpCode).send(NotFound);

    io.getIo().emit("participant", {
      action: "update",
      participant: participant,
    });
    return res.status(200).send(participant);
  } catch (error) {
    if (error.message === "You entered invalid data.")
      return res.status(BadRequest.httpCode).send(BadRequest);
    else return res.status(InternalServer.httpCode).send(InternalServer);
  }
};
