"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIo = void 0;
var io;
var SocketIo = /** @class */ (function () {
    function SocketIo() {
    }
    SocketIo.prototype.init = function (server) {
        io = require("socket.io")(server);
        io.on("connection", function (socket) {
            console.log("client connected");
        });
        return io;
    };
    SocketIo.prototype.getIo = function () {
        if (!io)
            throw new Error("socket.io not initialized");
        return io;
    };
    return SocketIo;
}());
exports.SocketIo = SocketIo;
