import express from "express";
import { SocketIo } from "./startup/socket.io";

const app = express();
const server = app.listen(9000, () => {
  console.log("app listening on port 9000!");
});
const socketIo = new SocketIo(server);

socketIo.init();
require("./startup/config")();
require("./startup/swagger")(app);
require("./startup/connectDB");
