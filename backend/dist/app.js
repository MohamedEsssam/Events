"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
require("./startup/swagger")(app);
require("./startup/config")();
require("./startup/connectDB");
app.listen(9000, function () {
    console.log("app listening on port 9000!");
});
