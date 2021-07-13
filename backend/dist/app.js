"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = require("./startup/socket.io");
var organization_1 = __importDefault(require("./models/organization"));
var OrgnizationRepository_1 = require("./repositories/OrgnizationRepository");
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
var repository = new OrgnizationRepository_1.OrganizationRepository(organization_1.default);
var user = {
    email: "kk@m.com",
    password: "9999",
    verified: false,
    name: "resala_",
    description: "charity organization",
    activityTypes: ["Festivals"],
    establishOn: new Date(),
};
// const result: any = repository.register(user);
var result = repository.getAll();
// const result: any = repository.login("gg@m.com", "");
// const result: any = repository.register(user);
console.log(result);
