"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var error_1 = __importDefault(require("../startup/error"));
var statusCode_1 = __importDefault(require("./statusCode"));
var internalServerException = new error_1.default();
internalServerException.setError("Internal Server.", "Something went wrong.", statusCode_1.default.InternalServer, new Date());
exports.default = internalServerException.getError();
