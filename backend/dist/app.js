"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = require("./startup/socket.io");
var app = express_1.default();
var server = app.listen(9000, function () {
    console.log("app listening on port 9000!");
});
var socketIo = new socket_io_1.SocketIo();
app.use(express_1.default.static("./dist/public", {
    index: false,
    extensions: ["png", "jpg", "jpeg", "mp4", "avi", "3gp"],
}));
require("./startup/config")();
require("./startup/cors")(app);
require("./startup/swagger")(app);
require("./startup/connectDB");
require("./startup/routes")(app);
socketIo.init(server);
// const repository: EventRepository = new EventRepository(EventModel);
// const user: Event_ = {
//   title: "hhhh",
//   description: "hahahaha",
//   categories: ["Festivals"],
//   ticketPrice: 50,
//   endIn: new Date(),
//   holdOn: new Date(),
//   owner: "60ed8bfcd5c1371b5b2c035d",
//   location: { lat: 30, lng: 50 },
// };
// const result: any = repository.create(user);
// const result: any = repository.register(user);
// const result: any = repository.getAll();
// const result: any = repository.login("hhhh@gg.com", "1115");
// const result: any = repository.register(user);
// console.log(result);
