"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("config"));
mongoose_1.default
    .connect(config_1.default.get("databaseConn"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(function () { return console.log("Connected to MongoDB..."); })
    .catch(function (err) { return console.log("Could not connect to MongoDB...", err); });
