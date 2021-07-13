"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = require("./startup/socket.io");
var participant_1 = __importDefault(require("./models/participant"));
var ParticipantRepository_1 = require("./repositories/ParticipantRepository");
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
var repository = new ParticipantRepository_1.ParticipantRepository(participant_1.default);
var user = {
    email: "bbb@m.com",
    password: "9999",
    verified: false,
    firstName: "Mohamed",
    lastName: "Essam",
    birthDate: new Date(),
};
// const result: any = repository.register(user);
// const result: any = repository.getAll();
// const result: any = repository.login("gg@m.com", "");
var result = repository.unParticipate("60ed4fa7f30885ea99a5d50a", "60ed4fa7f30885ea99a5d50f");
console.log(result);
