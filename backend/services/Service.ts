import User from "../entities/User";
import Participant from "../entities/Participant";
import Organization from "../entities/Organization";
import Event_ from "../entities/Event";

type Combinable = User | Participant | Organization | Event_;

interface Service {
  getOne(...args: any[]): Combinable | null;
  getAll(...args: any[]): Combinable[];
  create(...args: any[]): Combinable;
  update(...args: any[]): Combinable | null;
  delete(...args: any[]): Combinable | null;
}

export default Service;
