import { Schema } from "mongoose";
import { pick } from "lodash";
import moment from "moment";
import User from "./user";
import Organization from "../entities/Organization";

const options = {
  toObject: {
    getters: true,
    virtuals: true,
  },
};
const organizationSchema: Schema<Organization> = new Schema<Organization>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    establishOn: {
      type: Date,
      get: function (v: Date): string {
        return moment(v).format("YYYY-MM-DD");
      },
      required: true,
    },
    activityTypes: {
      type: [String],
      enum: [
        "Festivals",
        "Parties",
        "Conferences",
        "Awards",
        "Competitions",
        "Sponsorships",
        "Workshops",
        "SpeakerSession",
      ],
      required: true,
    },
    createdEvents: {
      type: [Schema.Types.ObjectId],
      ref: "Event",
    },
  },
  options
);

organizationSchema.methods.toJSON = function (): object {
  const obj: object = this.toObject();

  return pick(obj, [
    "_id",
    "email",
    "verified",
    "name",
    "description",
    "establishOn",
    "activityTypes",
    "createdEvents",
  ]);
};

const Participant = User.discriminator<any>("Organization", organizationSchema);

export default Participant;
