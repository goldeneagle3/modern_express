import {connect} from "mongoose";
// import { connect } from "mongoose";
// import config from 'config';
// import logger from './logger';

async function connection() {
  const dbUri =
    "mongodb+srv://king3E:malasiye@cluster0.cl5nc.mongodb.net/dashboard?retryWrites=true&w=majority";

  try {
    await connect(dbUri);
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
    // process.exit();
  }
}

export default connection;
