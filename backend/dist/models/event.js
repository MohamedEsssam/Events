"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var lodash_1 = require("lodash");
var pointSchema = new mongoose_1.default.Schema({
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
var eventSchema = new mongoose_1.default.Schema({
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
        set: function setPointLoc(v) {
            return { type: "Point", coordinates: [v.lat, v.lng] };
        },
        get: function getPointLoc(v) {
            return { lng: v.coordinates[0], lat: v.coordinates[1] };
        },
        required: true,
    },
    owner: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    participants: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: "User",
    },
});
eventSchema.methods.toJSON = function () {
    var obj = this.toObject();
    return lodash_1.pick(obj, [
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
var Event = mongoose_1.default.model("Event", eventSchema);
exports.default = Event;
