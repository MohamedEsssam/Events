import Joi, { ValidationResult } from "@hapi/joi";
import Event from "../entities/Event";

export function validateEventSchema<T extends Event>(
  event: T
): ValidationResult {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    ticketPrice: Joi.number().required(),
    holdOn: Joi.date().required(),
    endIn: Joi.date().required(),
    location: Joi.object({ lat: Joi.number(), lng: Joi.number() }).required(),
    categories: Joi.array().items(
      Joi.string().valid(
        "Festivals",
        "Parties",
        "Conferences",
        "Awards",
        "Competitions",
        "Sponsorships",
        "Workshops",
        "SpeakerSession"
      )
    ),
    owner: Joi.string().required(),
    participants: Joi.array().items(Joi.string()),
  });

  return schema.validate(event);
}
