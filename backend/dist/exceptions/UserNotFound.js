"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var error_1 = __importDefault(require("../startup/error"));
var statusCode_1 = __importDefault(require("./statusCode"));
var userNotFoundException = new error_1.default();
userNotFoundException.setError("Not Found.", "You entered invalid email or password.", statusCode_1.default.NotFound, new Date());
exports.default = userNotFoundException.getError();
