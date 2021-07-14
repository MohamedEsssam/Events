import Joi, { ValidationResult } from "@hapi/joi";
import Organization from "../entities/Organization";

export function validateOrganizationSchema<T extends Organization>(
  organization: T
): ValidationResult {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    establishOn: Joi.date().raw().required(),
    activityTypes: Joi.array().items(
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
    verified: Joi.boolean().required(),
  });

  return schema.validate(organization);
}
