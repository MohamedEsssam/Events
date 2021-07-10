import User from "../types/User";
import Participant from "../types/Participant";
import Organization from "../types/Organization";
import Event_ from "../types/Event";

type Combinable = User | Participant | Organization | Event_;

interface Service {
  getOne(...args: any[]): Combinable | null;
  getAll(...args: any[]): Combinable[];
  create(...args: any[]): Combinable;
  update(...args: any[]): Combinable | null;
  delete(...args: any[]): Combinable | null;
}

export default Service;
