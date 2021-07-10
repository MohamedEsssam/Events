import User from "./User";
import Event_ from "./Event";

interface Participant extends User {
  firstName: string;
  lastName: string;
  birthday: Date;
  events?: Event_[];
}

export default Participant;
