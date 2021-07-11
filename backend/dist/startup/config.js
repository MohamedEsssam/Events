"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("config"));
module.exports = function () {
    if (!config_1.default.get("authSecret"))
        throw new Error("FATAL ERROR: auth secret is not defined.");
    if (!config_1.default.get("databaseConn"))
        throw new Error("FATAL ERROR: database connection is not defined.");
    if (!config_1.default.get("mailerUser"))
        throw new Error("FATAL ERROR: mailer user is not defined.");
    if (!config_1.default.get("mailerPass"))
        throw new Error("FATAL ERROR: mailer password is not defined.");
};
