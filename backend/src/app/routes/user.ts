import { Router } from "express";
import { userController } from "../controllers/user";
import { Auth } from "../libs/jwt";

class RoleRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/users", Auth.checkJwt, userController.getUsers);
    this.router.get("/users/technicals", userController.getTechnicals);
    this.router.post("/user", userController.saveUser);
    this.router.post("/login", userController.signIn);
  }
}

const roleRoutes = new RoleRoutes();
export default roleRoutes.router;
