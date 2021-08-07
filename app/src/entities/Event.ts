type location = { _id: string; coordinates: Array<number>; type: "Point" };
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
  onPress?: any;
}

export default Event_;
