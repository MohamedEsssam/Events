import Joi, { ValidationResult } from "@hapi/joi";
import Participant from "../entities/Participant";

export function validateParticipantSchema<T extends Participant>(
  participant: T
): ValidationResult {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    birthDate: Joi.date().raw().required(),
    verified: Joi.boolean().required(),
  });

  return schema.validate(participant);
}
