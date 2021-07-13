import User from "./User";
import Category from "./Category";

interface Organization extends User {
  name: string;
  description: string;
  establishOn: Date;
  activityTypes: string[];
  createdEvents?: string[];
}

export default Organization;
