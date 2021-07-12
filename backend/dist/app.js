"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var UserRepository_1 = require("./repositories/UserRepository");
var socket_io_1 = require("./startup/socket.io");
var user_1 = __importDefault(require("./models/user"));
var app = express_1.default();
var server = app.listen(9000, function () {
    console.log("app listening on port 9000!");
});
var socketIo = new socket_io_1.SocketIo(server);
require("./startup/config")();
require("./startup/cors")(app);
require("./startup/swagger")(app);
require("./startup/connectDB");
socketIo.init();
var repository = new UserRepository_1.UserRepository(user_1.default);
var user = { email: "ff@m.com", password: "9999", verified: false };
var result = repository.create(user);
// const result: any = repository.getAll();
// const result: any = repository.login("gg@m.com", "");
console.log(result);
