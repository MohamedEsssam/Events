import { Socket } from "socket.io";
import { Server } from "http";

let io: Socket;
export class SocketIo {
  constructor() {}

  init(server: Server): Socket {
    io = require("socket.io")(server);
    io.on("connection", (socket: SocketIo) => {
      console.log("client connected");
    });

    return io;
  }

  getIo(): Socket {
    if (!io) throw new Error("socket.io not initialized");

    return io;
  }
}
