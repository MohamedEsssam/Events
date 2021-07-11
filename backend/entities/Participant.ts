import User from "./User";
import Event_ from "./Event";

interface Participant extends User {
  firstName: string;
  lastName: string;
  birthDate: Date;
  events?: Event_[];
}

export default Participant;
