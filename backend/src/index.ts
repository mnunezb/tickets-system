import Server from "./app/server/server";
import { config } from "dotenv";

class Index {
  public static main(): void {
    config();
    const server = new Server();
    server.start();
  }
}

Index.main();
