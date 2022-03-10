import { Server } from "./app";

export const app = Server.bootstrap().app;

export const server = () => {
  app.listen(8000, () =>
    console.log("Server listening at http://localhost:8000")
  );
};

server();
