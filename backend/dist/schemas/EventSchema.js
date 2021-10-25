"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEventSchema = void 0;
var joi_1 = __importDefault(require("@hapi/joi"));
function validateEventSchema(event) {
    var schema = joi_1.default.object({
        image: joi_1.default.object(),
        title: joi_1.default.string().required(),
        description: joi_1.default.string().required(),
        ticketPrice: joi_1.default.number().required(),
        holdOn: joi_1.default.date().required(),
        endIn: joi_1.default.date().required(),
        location: joi_1.default.object({ lat: joi_1.default.number(), lng: joi_1.default.number() }).required(),
        categories: joi_1.default.array().items(joi_1.default.string().valid("Festivals", "Parties", "Conferences", "Awards", "Competitions", "Sponsorships", "Workshops", "SpeakerSession")),
        owner: joi_1.default.string().required(),
        participants: joi_1.default.array().items(joi_1.default.string()),
    });
    return schema.validate(event);
}
exports.validateEventSchema = validateEventSchema;
