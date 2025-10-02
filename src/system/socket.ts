import { Server } from "socket.io";
import { server } from "./express";

export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  maxHttpBufferSize: 1e3,
  allowEIO3: true,
});
