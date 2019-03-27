import { config } from 'dotenv';
import { connect } from 'mongoose';

config();

const URL = `${process.env.MONGO_URI}`;
export class DB {
  public static initDB(): void {
    connect(
      URL,
      { useNewUrlParser: true },
    )
      .then((res) => {
        console.log('BD online');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  constructor() {}
}
