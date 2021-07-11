import { Server } from "http";

let io: any;
export class SocketIo {
  constructor(private server: Server) {}

  init(): any {
    io = require("socket.io")(this.server);
    io.on("connection", (socket: SocketIo) => {
      console.log("client connected");
    });

    return io;
  }

  getIo(): any {
    if (!io) throw new Error("socket.io not initialized");

    return io;
  }
}
