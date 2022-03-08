import { IChat } from "entities/interfaces/chat.interface";
import { Schema, model } from "mongoose";

const schema = new Schema<IChat>(
  {
    chatName: { type: String, required: true },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    messages: [
      {
        sender: { type: Schema.Types.ObjectId, ref: "User" },
        text: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

const ChatModel = model<IChat>("Chat", schema);

export { ChatModel };
