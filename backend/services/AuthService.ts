import Organization from "../entities/Organization";
import Participant from "../entities/Participant";

const jwt = require("jsonwebtoken");
const pick = require("lodash/pick");
const config = require("config");

type User = Participant | Organization;
class AuthServices {
  generateToken(user: User) {
    const payload = { ...pick(user, ["_id", "email"]) };
    const token = jwt.sign(payload, config.get("authSecret"));

    return token;
  }
}
module.exports = AuthServices;
