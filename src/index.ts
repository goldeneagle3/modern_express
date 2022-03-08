// import {createServer} from 'http'

import connection from "./utils/db.connection";
import { Server } from "./app";
import socket from "controllers/socket.controller";

// create http server
export const app = Server.bootstrap().app;

// const httpServer = createServer(app);

const server = async () => {
  app.listen(3000, () => console.log("Server is started!"));
  try {
    await connection();
  } catch (error) {
    console.log(error);
  }
};
server();

socket(server);
