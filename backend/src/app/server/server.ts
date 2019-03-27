import cors from 'cors';
import express from 'express';
import path from 'path';
import { DB } from '../db/db';

// Routes
import routes from '../routes';

export default class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    DB.initDB();
  }

  public config(): void {
    this.app.set('port', process.env.PORT as string);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  public routes(): void {
    this.app.use('/api', routes);
  }

  public start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server in port: ${this.app.get('port')}`);
    });
  }
}
