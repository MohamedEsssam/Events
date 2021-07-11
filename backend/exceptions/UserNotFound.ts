import Error from "../startup/error";
import HttpStatus from "./statusCode";

const userNotFoundException: Error = new Error();

userNotFoundException.setError(
  "Not Found.",
  "You entered invalid email or password.",
  HttpStatus.NotFound,
  new Date()
);

export default userNotFoundException.getError();
