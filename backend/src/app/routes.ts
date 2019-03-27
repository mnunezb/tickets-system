import express from 'express';

// Import our routes
import role from './routes/role';
import service from './routes/service';
import serviceType from './routes/serviceType';
import ticket from './routes/ticket';
import ticketState from './routes/ticketState';
import user from './routes/user';

export class Routing {
  public app: express.Application;

  constructor () {
    this.app = express();
    this.setRoutes();
  }

  // Set our routes
  public setRoutes (): void {
    this.app.use(
      role,
      ticket,
      serviceType,
      service,
      ticketState,
      user,
    );
  }
}

const routing = new Routing();
export default routing.app;
