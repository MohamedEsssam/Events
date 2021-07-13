import express from "express";
import { Server } from "http";
import { UserRepository } from "./repositories/UserRepository";
import { SocketIo } from "./startup/socket.io";
import User from "./entities/User";
import ParticipantModel from "./models/participant";
import UserModel from "./models/user";
import { ParticipantRepository } from "./repositories/ParticipantRepository";
import Participant from "./entities/Participant";

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

const repository: ParticipantRepository = new ParticipantRepository(
  ParticipantModel
);
const user: Participant = {
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
const result: any = repository.unParticipate(
  "60ed4fa7f30885ea99a5d50a",
  "60ed4fa7f30885ea99a5d50f"
);

console.log(result);
