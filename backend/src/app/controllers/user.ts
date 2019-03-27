import { Request, Response } from 'express';
import { Auth } from '../libs/jwt';
import user, { User } from '../models/user';

class UserController {
  public async getUsers(req: Request, res: Response) {
    try {
      const usersDB = await user.find();
      res.json({ usersDB });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  public async getTechnicals(req: Request, res: Response) {
    try {
      const technicalsDB = await user.find({
        userRole: '5c96831282f30a0d58ec349b',
      });
      res.json({ technicalsDB });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  public async saveUser(req: Request, res: Response) {
    const userIn: User = req.body;
    try {
      const userBD = await new user(userIn);
      userBD.save();
      res.json({ userBD });
    } catch (error) {}
  }

  public async signIn(req: Request, res: Response) {
    let userAux: User;
    try {
      const userBD = await user.findOne({
          username: req.body.username,
        })
        .populate({ path: 'userRole' });
      if (userBD) {
        userAux = userBD;
        const token = Auth.createToken(userAux);
        res.json({ token, user: userBD });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export const userController = new UserController();
