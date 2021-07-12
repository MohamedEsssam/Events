"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrganizationSchema = void 0;
var joi_1 = __importDefault(require("@hapi/joi"));
function validateOrganizationSchema(organization) {
    var schema = joi_1.default.object({
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().min(3).required(),
        name: joi_1.default.string().required(),
        description: joi_1.default.string().required(),
        establishOn: joi_1.default.date().raw().required(),
        activityTypes: joi_1.default.string().valid("Festivals", "Parties", "Conferences", "Awards", "Competitions", "Sponsorships", "Workshops", "SpeakerSession"),
        verified: joi_1.default.boolean().required(),
    });
    return schema.validate(organization);
}
exports.validateOrganizationSchema = validateOrganizationSchema;
