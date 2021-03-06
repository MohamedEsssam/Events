import { Schema } from "mongoose";
import { pick } from "lodash";
import moment from "moment";
import User from "./user";
import Participant from "../entities/Participant";

const options = {
  toObject: {
    getters: true,
    virtuals: true,
  },
};
const participantSchema: Schema<Participant> = new Schema<Participant>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      get: function (v: Date): string {
        return moment(v).format("YYYY-MM-DD");
      },
      required: true,
    },
    events: {
      type: [Schema.Types.ObjectId],
      ref: "Event",
    },
  },
  options
);

participantSchema.methods.toJSON = function (): object {
  const obj: object = this.toObject();

  return pick(obj, [
    "_id",
    "email",
    "verified",
    "firstName",
    "lastName",
    "birthDate",
    "events",
  ]);
};

const Participant = User.discriminator<any>("Participant", participantSchema);

export default Participant;
