import { Router } from "express";
import { serviceController } from "../controllers/service";

class ServiceRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/services", serviceController.getServices);
    this.router.post("/service", serviceController.saveService);
  }
}

const serviceRoutes = new ServiceRoutes();
export default serviceRoutes.router;
