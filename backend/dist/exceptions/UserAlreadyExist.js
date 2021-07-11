"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var error_1 = __importDefault(require("../startup/error"));
var statusCode_1 = __importDefault(require("./statusCode"));
var userAlreadyExistException = new error_1.default();
userAlreadyExistException.setError("Found.", "You already registered before.", statusCode_1.default.Conflict, new Date());
exports.default = userAlreadyExistException.getError();
