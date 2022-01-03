import { RequestHandler } from "express";
import { EventRepository } from "../../repositories/EventRepository";
import EventModel from "../../models/event";
import Event from "../../entities/Event";
import InternalServer from "../../exceptions/InternalServer";

const repository: EventRepository = new EventRepository(EventModel);
export const getEvents: RequestHandler = async (req, res) => {
  try {
    const searchQuery = req.query;
    const events: Event[] | null = await repository.getAll(searchQuery);

    return res.status(200).send(events);
  } catch (error) {
    return res.status(InternalServer.httpCode).send(InternalServer);
  }
};
