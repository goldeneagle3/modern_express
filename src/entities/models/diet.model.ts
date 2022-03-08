import { Schema, model } from "mongoose";
import { IDiet } from "../interfaces/diet.interface";

const schema = new Schema<IDiet>(
  {
    name: { type: String, required: true },
    meal: [
      { 
        name: {type: String,required: true},
        date: {type: String,required: true},
        food: [String]
       }
    ],
  },
  { timestamps: true }
);

const DietModel = model<IDiet>("Diet", schema);

export { DietModel };
