import { RequestHandler } from "express";
import { EventRepository } from "../../repositories/EventRepository";
import EventModel from "../../models/event";
import Event from "../../entities/Event";
import NotFound from "../../exceptions/NotFound";
import InternalServer from "../../exceptions/InternalServer";

const repository: EventRepository = new EventRepository(EventModel);
export const deleteEvent: RequestHandler = async (req, res) => {
  const id: string = req.params["id"];
  try {
    const event: Event | null = await repository.delete(id);

    if (!event) return res.status(NotFound.httpCode).send(NotFound);

    return res.status(200).send(event);
  } catch (error) {
    return res.status(InternalServer.httpCode).send(InternalServer);
  }
};
