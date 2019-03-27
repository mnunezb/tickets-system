import { config } from 'dotenv';
import server from './app/server/server';

class Index {
  public static main(): void {
    config();
    const s = new server();
    s.start();
  }
}

Index.main();
