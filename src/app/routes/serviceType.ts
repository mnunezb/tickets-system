import { Router } from "express";
import { serviceTypeController } from "../controllers/serviceType";

class RoleRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/service-types", serviceTypeController.getServiceTypes);
    this.router.post("/service-type", serviceTypeController.saveServiceType);
  }
}

const roleRoutes = new RoleRoutes();
export default roleRoutes.router;
