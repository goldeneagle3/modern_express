import { Server } from "socket.io";

import { ChatModel } from "entities/models/chat.model";

// import Chat from "./../models/chat.model.js";

const EVENTS = {
  connection: "connection",
  CLIENT: {
    CREATE_ROOM: "CREATE_ROOM",
    SEND_ROOM_MESSAGE: "SEND_ROOM_MESSAGE",
    JOIN_ROOM: "JOIN_ROOM",
  },
  SERVER: {
    ROOMS: "ROOMS",
    JOINED_ROOM: "JOINED_ROOM",
    LEFT_ROOM: "JOINED_ROOM",
    ROOM_MESSAGE: "ROOM_MESSAGE",
  },
};

export default (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENTURI,
      methods: ["GET", "POST", "PUT"],
      credentials: true,
    },
  });

  io.on(EVENTS.connection, function (socket) {
    socket.on(EVENTS.SERVER.JOINED_ROOM, (data) => {
      socket.join(data.room);
    });
    socket.on(EVENTS.SERVER.LEFT_ROOM, (data) => {
      socket.leave(data.room);
    });
    socket.on(EVENTS.SERVER.ROOM_MESSAGE, (data) => {
      backFunc(data.messageInfo, data.room);
    });
  });

  const backFunc = async (message, chat) => {
    try {
      let result = await ChatModel.findOneAndUpdate(
        { _id: chat },
        {
          $push: { messages: message },
        },
        { new: true }
      )
        .populate("users", "_id name")
        .populate("messages.sender", "_id name")
        .exec();
      io.to(chat).emit("new message", result);
    } catch (err) {
      throw new Error(err);
    }
  };
};
