import express from "express";
import { Server } from "http";
import { UserRepository } from "./repositories/UserRepository";
import { SocketIo } from "./startup/socket.io";
import User from "./entities/User";
import ParticipantModel from "./models/participant";
import UserModel from "./models/user";
import OrganizationModel from "./models/organization";
import { ParticipantRepository } from "./repositories/ParticipantRepository";
import Participant from "./entities/Participant";
import { OrganizationRepository } from "./repositories/OrgnizationRepository";
import Organization from "./entities/Organization";
import Category from "./entities/Category";

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

const repository: OrganizationRepository = new OrganizationRepository(
  OrganizationModel
);

const user: Organization = {
  email: "kk@m.com",
  password: "9999",
  verified: false,
  name: "resala_",
  description: "charity organization",
  activityTypes: ["Festivals"],
  establishOn: new Date(),
};
// const result: any = repository.register(user);
const result: any = repository.getAll();
// const result: any = repository.login("gg@m.com", "");
// const result: any = repository.register(user);

console.log(result);
