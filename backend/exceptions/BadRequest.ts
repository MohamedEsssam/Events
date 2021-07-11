import Error from "../startup/error";
import HttpStatus from "./statusCode";

const badRequestException: Error = new Error();

badRequestException.setError(
  "Bad Request.",
  "You entered invalid data.",
  HttpStatus.BadRequest,
  new Date()
);

export default badRequestException.getError();
