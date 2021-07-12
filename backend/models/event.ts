import { Schema, model, Model } from "mongoose";
import { pick } from "lodash";
import Event from "../entities/Event";

const pointSchema: Schema<Event> = new Schema<Event>({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const eventSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  holdOn: {
    type: Date,
    required: true,
  },
  endIn: {
    type: Date,
    required: true,
  },
  categories: {
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
  location: {
    type: pointSchema,
    set: function setPointLoc(v: { lat: number; lng: number }): {
      type: "Point";
      coordinates: [number, number];
    } {
      return { type: "Point", coordinates: [v.lat, v.lng] };
    },
    get: function getPointLoc(v: { coordinates: number[] }): {
      lat: number;
      lng: number;
    } {
      return { lng: v.coordinates[0], lat: v.coordinates[1] };
    },
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  participants: {
    type: [Schema.Types.ObjectId],
    ref: "User",
  },
});

eventSchema.methods.toJSON = function (): object {
  const obj: object = this.toObject();

  return pick(obj, [
    "_id",
    "title",
    "description",
    "holdOn",
    "endIn",
    "categories",
    "location",
    "owner",
    "participants",
  ]);
};

const Event: Model<Event> = model("Event", eventSchema);

export default Event;
