import express from "express";
import { Server } from "http";
import { UserRepository } from "./repositories/UserRepository";
import { SocketIo } from "./startup/socket.io";
import User from "./entities/User";
import UserModel from "./models/user";

const app: express.Application = express();
const server: Server = app.listen(9000, () => {
  console.log("app listening on port 9000!");
});
const socketIo: SocketIo = new SocketIo(server);

require("./startup/config")();
require("./startup/cors")(app);
require("./startup/swagger")(app);
require("./startup/connectDB");
socketIo.init();

const repository = new UserRepository(UserModel);
const user: User = { email: "ggg@m.com", password: "1111", verified: false };
// const result: any = repository.create(user);
const result: any = repository.getAll();
console.log(result);
