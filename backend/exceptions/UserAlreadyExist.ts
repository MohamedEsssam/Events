import Error from "../startup/error";
import HttpStatus from "./statusCode";

const userAlreadyExistException: Error = new Error();

userAlreadyExistException.setError(
  "Found.",
  "You already registered before.",
  HttpStatus.Conflict,
  new Date()
);

export default userAlreadyExistException.getError();
