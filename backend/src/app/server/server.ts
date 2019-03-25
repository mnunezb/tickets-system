import express from "express";
import path from "path";
import { DB } from "../db/db";
import cors from "cors";

// Routes
import routes from "../routes";

export default class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    DB.initDB();
  }

  config(): void {
    this.app.set("port", <string>process.env.PORT);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  routes(): void {
    this.app.use("/api", routes);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server in port: ${this.app.get("port")}`);
    });
  }
}
