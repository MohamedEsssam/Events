import User from "./User";

interface Participant extends User {
  firstName: string;
  lastName: string;
  birthDate: Date;
  events?: string[];
}

export default Participant;
