import User from "./User";
import Event_ from "./Event";

interface Participant extends User {
  firstName: string;
  lastName: string;
  birthDate: Date;
  events?: string[];
}

export default Participant;
