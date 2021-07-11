import Error from "../startup/error";
import HttpStatus from "./statusCode";

const internalServerException: Error = new Error();

internalServerException.setError(
  "Internal Server.",
  "Something went wrong.",
  HttpStatus.InternalServer,
  new Date()
);

export default internalServerException.getError();
