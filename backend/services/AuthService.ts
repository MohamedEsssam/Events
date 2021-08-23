import { Document } from "mongoose";
import Organization from "../entities/Organization";
import Participant from "../entities/Participant";

const jwt = require("jsonwebtoken");
const pick = require("lodash/pick");
const config = require("config");

type User = Participant | Organization | Document;
export class AuthServices {
  generateToken(user: User): string {
    const payload = { ...pick(user, ["_id", "email", "verified"]) };
    const token = jwt.sign(payload, config.get("authSecret"));

    return token;
  }
}
