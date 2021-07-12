"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserSchema = void 0;
var joi_1 = __importDefault(require("@hapi/joi"));
function validateUserSchema(user) {
    var schema = joi_1.default.object({
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().min(3).required(),
        verified: joi_1.default.boolean().required(),
    });
    return schema.validate(user);
}
exports.validateUserSchema = validateUserSchema;
