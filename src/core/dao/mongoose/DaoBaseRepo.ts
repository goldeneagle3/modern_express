// import { IDalCore } from "./IDao";
// import mongoose from "mongoose";

// export class DaoBaseRepository implements IDalCore {
//   constructor(private model: typeof mongoose.Model) {}

//   create = async (body: object) => {
//     const newData = new this.model(body);
//     await newData.save();

//     return newData.id;
//   };

//   list = async () => {
//     const datas = await this.model.find();
//     return datas;
//   };

//   read = async (filter: string) => {
//     const data = await this.model.findById(filter);

//     return data;
//   };

//   update = async (body: object, filter: string) => {
//     const data = await this.model.findById(filter);
//     Object.assign(data, body);
//     await data.save();
//     return data;
//   };

//   delete = async (filter: string) => {
//     await this.model.findByIdAndDelete(filter);
//     return "Data deleted successfully.";
//   };
// }

// // export const daoBaseRepository = new DaoBaseRepository();
