import { Request, Response } from "express";
import RoleModel, { Role } from "../models/role";

class FileController {
  public async getRoles(req: Request, res: Response): Promise<Response> {
    try {
      const roles = await RoleModel.find();
      return res.json({ roles });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async saveRole(req: Request, res: Response) {
    let role: Role = req.body;
    try {
      const roleBD = await new RoleModel(role);
      roleBD.save();
      res.json({ roleBD });
    } catch (error) {}
  }
}

export const roleController = new FileController();
