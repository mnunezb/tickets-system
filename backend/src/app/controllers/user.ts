import { Request, Response } from "express";
import UserModel, { User } from "../models/user";
import { Auth } from "../libs/jwt";

class UserController {
  public async getUsers(req: Request, res: Response) {
    try {
      const users = await UserModel.find();
      res.json({ users });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }
  public async getTechnicals(req: Request, res: Response) {
    try {
      const technicals = await UserModel.find({
        userRole: "5c96831282f30a0d58ec349b"
      });
      res.json({ technicals });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  public async saveUser(req: Request, res: Response) {
    let user: User = req.body;
    try {
      const userBD = await new UserModel(user);
      userBD.save();
      res.json({ userBD });
    } catch (error) {}
  }

  public async signIn(req: Request, res: Response) {
    let user: User;
    try {
      const userBD = await UserModel.findOne({
        username: req.body.username
      }).populate({ path: "userRole" });
      if (userBD) {
        user = userBD;
        const token = Auth.createToken(user);
        res.json({ user: userBD, token });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export const userController = new UserController();
