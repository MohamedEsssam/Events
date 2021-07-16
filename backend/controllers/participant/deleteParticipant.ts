import { RequestHandler } from "express";
import { SocketIo } from "../../startup/socket.io";
import { ParticipantRepository } from "../../repositories/ParticipantRepository";
import ParticipantModel from "../../models/participant";
import Participant from "../../entities/Participant";
import NotFound from "../../exceptions/NotFound";
import InternalServer from "../../exceptions/InternalServer";

const repository: ParticipantRepository = new ParticipantRepository(
  ParticipantModel
);
const io = new SocketIo();
export const deleteParticipant: RequestHandler = async (req, res) => {
  const id: string = req.params["id"];
  try {
    const participant: Participant | null = await repository.delete(id);

    if (!participant) return res.status(NotFound.httpCode).send(NotFound);

    io.getIo().emit("participant", {
      action: "delete",
      participant: participant,
    });
    return res.status(200).send(participant);
  } catch (error) {
    return res.status(InternalServer.httpCode).send(InternalServer);
  }
};
