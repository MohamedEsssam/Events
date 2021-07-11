import Organization from "./Organization";
import Participant from "./Participant";
import Category from "./Category";

type location = { lat: number; lng: number };
interface Event_ {
  readonly _id?: string;
  owner: Organization;
  participants?: Participant[];
  holdOn: Date;
  endIn: Date;
  location: location;
  description: string;
  ticketPrice: number;
  category: Category;
}

export default Event_;
