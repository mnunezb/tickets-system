import { Request, Response } from 'express';
import role, { Role } from '../models/role';

class FileController {
  public async getRoles(req: Request, res: Response): Promise<Response> {
    try {
      const roles = await role.find();
      return res.json({ roles });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  public async saveRole(req: Request, res: Response) {
    const roleIn: Role = req.body;
    try {
      const roleBD = await new role(role);
      roleBD.save();
      res.json({ roleBD });
    } catch (error) {}
  }
}

export const roleController = new FileController();
