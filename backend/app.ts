import express from "express";
import { Server } from "http";
import { UserRepository } from "./repositories/UserRepository";
import { SocketIo } from "./startup/socket.io";
import User from "./entities/User";
import ParticipantModel from "./models/participant";
import UserModel from "./models/user";
import EventModel from "./models/event";
import OrganizationModel from "./models/organization";
import { ParticipantRepository } from "./repositories/ParticipantRepository";
import Participant from "./entities/Participant";
import { OrganizationRepository } from "./repositories/OrgnizationRepository";
import Organization from "./entities/Organization";
import Category from "./entities/Category";
import { EventRepository } from "./repositories/EventRepository";
import Event_ from "./entities/Event";

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

const repository: UserRepository = new UserRepository(UserModel);

const user: Participant = {
  email: "hhhh@gg.com",
  password: "1111",
  firstName: "mm",
  lastName: "tt",
  birthDate: new Date(),
  verified: false,
};

// const result: any = repository.create(user);
// const result: any = repository.register(user);
// const result: any = repository.getAll();
const result: any = repository.login("hhhh@gg.com", "1115");
// const result: any = repository.register(user);

console.log(result);
