import Joi, { ValidationResult } from "@hapi/joi";
import User from "../entities/User";

export function validateUserSchema<T extends User>(user: T): ValidationResult {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    verified: Joi.boolean().required(),
  });

  return schema.validate(user);
}
