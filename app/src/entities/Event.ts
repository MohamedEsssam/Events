type location = { lat: number; lng: number };
interface Event_ {
  readonly _id?: string;
  title: string;
  description: string;
  holdOn: Date;
  endIn: Date;
  location: location;
  ticketPrice: number;
  categories: string[];
  owner: string;
  participants?: string[];
}

export default Event_;
