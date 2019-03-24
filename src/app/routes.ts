import express from "express";

//Import our routes
import roleRoute from "./routes/role";
import ticketRoute from "./routes/ticket";
import serviceTypeRoute from "./routes/serviceType";
import serviceRoute from "./routes/service";
import ticketStateRoute from "./routes/ticketState";
import userRoute from "./routes/user";

export class Routing {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.setRoutes();
  }

  //Set our routes
  public setRoutes(): void {
    this.app.use(
      roleRoute,
      ticketRoute,
      serviceTypeRoute,
      serviceRoute,
      ticketStateRoute,
      userRoute
    );
  }
}

const routing = new Routing();
export default routing.app;
