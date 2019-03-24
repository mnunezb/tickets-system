import { Router } from "express";
import { roleController } from "../controllers/role";

class RoleRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/roles", roleController.getRoles);
    this.router.post("/role", roleController.saveRole);
  }
}

const roleRoutes = new RoleRoutes();
export default roleRoutes.router;
