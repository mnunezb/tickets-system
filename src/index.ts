import Server from "./app/server/server";
import { config } from "dotenv";

class Index {
  public static main(): void {
    config();
    const server = new Server();
    server.start();
    console.log("Hello rey");
  }
}

Index.main();
