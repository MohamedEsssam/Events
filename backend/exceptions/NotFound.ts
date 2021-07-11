import Error from "../startup/error";
import HttpStatus from "./statusCode";

const resourceNotFoundException: Error = new Error();

resourceNotFoundException.setError(
  "Not Found.",
  "Resource not found.",
  HttpStatus.NotFound,
  new Date()
);

export default resourceNotFoundException.getError();
