"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var publicRoutes_1 = __importDefault(require("../routes/publicRoutes"));
module.exports = function (app) {
    app.use(express_1.json({ limit: "50mb" }));
    app.use("/api", publicRoutes_1.default);
};
