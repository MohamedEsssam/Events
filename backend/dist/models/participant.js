"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var lodash_1 = require("lodash");
var moment_1 = __importDefault(require("moment"));
var user_1 = __importDefault(require("./user"));
var options = {
    toObject: {
        getters: true,
        virtuals: true,
    },
};
var participantSchema = new mongoose_1.default.Schema({
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
        get: function (v) {
            return moment_1.default(v).format("YYYY-MM-DD");
        },
        required: true,
    },
    events: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: "Event",
    },
}, options);
participantSchema.methods.toJSON = function () {
    var obj = this.toObject();
    return lodash_1.pick(obj, [
        "_id",
        "email",
        "verified",
        "firstName",
        "lastName",
        "birthDate",
        "events",
    ]);
};
var Participant = user_1.default.discriminator("Participant", participantSchema);
exports.default = Participant;
