import { RequestHandler } from "express";
import { EventRepository } from "../../repositories/EventRepository";
import EventModel from "../../models/event";
import Event from "../../entities/Event";
import BadRequest from "../../exceptions/BadRequest";
import NotFound from "../../exceptions/NotFound";
import InternalServer from "../../exceptions/InternalServer";

const repository: EventRepository = new EventRepository(EventModel);
export const updateEvent: RequestHandler = async (req, res) => {
  const request: Event = req.body;
  const id: string = req.params["id"];
  try {
    const event: Event | null = await repository.update(id, request);

    if (!event) return res.status(NotFound.httpCode).send(NotFound);

    return res.status(200).send(event);
  } catch (error) {
    if (error.message === "You entered invalid data.")
      return res.status(BadRequest.httpCode).send(BadRequest);
    else return res.status(InternalServer.httpCode).send(InternalServer);
  }
};
