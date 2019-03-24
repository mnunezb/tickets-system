import { connect } from "mongoose";
import { config } from "dotenv";

config();

const URL = `${process.env.MONGO_URI}`;
export class DB {
  constructor() {}
  static initDB(): void {
    connect(
      URL,
      { useNewUrlParser: true }
    )
      .then(res => {
        console.log("BD online");
      })
      .catch(error => {
        console.log(error);
      });
  }
}
