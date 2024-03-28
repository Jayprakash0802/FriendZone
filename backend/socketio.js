const socket = require("socket.io");

let io;

const initializeSocketIO = (server) => {
  io = socket(server, {
    cors: {
      credentials: true,
      origin: 'http://localhost:5173',
    },
  });

  io.on("connection", (socket) => {
    console.log("user connected (socket)");

    socket.on("disconnect", () => {
      console.log("user Disconnected (d socket)");
    });
  });
};

const getIO = () => io;

module.exports = { initializeSocketIO, getIO };
