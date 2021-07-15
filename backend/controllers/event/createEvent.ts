import { RequestHandler } from "express";
import { EventRepository } from "../../repositories/EventRepository";
import EventModel from "../../models/event";
import Event from "../../entities/Event";
import BadRequest from "../../exceptions/BadRequest";
import InternalServer from "../../exceptions/InternalServer";

const repository: EventRepository = new EventRepository(EventModel);
export const createEvent: RequestHandler = async (req, res) => {
  const request: Event = req.body;
  try {
    const event: Event | null = await repository.create(request);

    if (!event) return res.status(BadRequest.httpCode).send(BadRequest);

    return res.status(200).send(event);
  } catch (error) {
    if (error.message === "You entered invalid data.")
      return res.status(BadRequest.httpCode).send(BadRequest);
    else return res.status(InternalServer.httpCode).send(InternalServer);
  }
};
