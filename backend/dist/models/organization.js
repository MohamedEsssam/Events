"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var lodash_1 = require("lodash");
var moment_1 = __importDefault(require("moment"));
var user_1 = __importDefault(require("./user"));
var options = {
    toObject: {
        getters: true,
        virtuals: true,
    },
};
var organizationSchema = new mongoose_1.Schema({
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
        get: function (v) {
            return moment_1.default(v).format("YYYY-MM-DD");
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
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: "Event",
    },
}, options);
organizationSchema.methods.toJSON = function () {
    var obj = this.toObject();
    return lodash_1.pick(obj, [
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
var Participant = user_1.default.discriminator("Organization", organizationSchema);
exports.default = Participant;
