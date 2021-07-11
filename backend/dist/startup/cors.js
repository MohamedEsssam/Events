"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var config_1 = __importDefault(require("config"));
module.exports = function (app) {
    var options = {
        allowedHeaders: [
            "Origin",
            "X-Requested-With",
            "Content-Type",
            "Accept",
            "X-Access-Token",
            "Authorization",
        ],
        credentials: true,
        methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
        origin: config_1.default.get("clientApi"),
        preflightContinue: false,
    };
    app.use(cors_1.default(options));
};
