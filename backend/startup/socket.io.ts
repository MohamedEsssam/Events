let io: any;
export class SocketIo {
  constructor(private server: any) {}

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
