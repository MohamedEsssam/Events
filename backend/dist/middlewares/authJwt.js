"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authJwt = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("config"));
var authJwt = function (req, res, next) {
    var token = req.header("Authorization");
    if (!token)
        return res.status(401).send("Access denied, No token provided.");
    try {
        jsonwebtoken_1.default.verify(token, config_1.default.get("authSecret"));
        next();
    }
    catch (ex) {
        res.status(400).send("Invalid token.");
    }
};
exports.authJwt = authJwt;
