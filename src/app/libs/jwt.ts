import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "../models/user";

export class Auth {
  public static createToken(user: User) {
    var payload = {
      username: user.name,
      name: user.name,
      lastName: user.lastName,
      userRole: user.userRole
    };

    return jwt.sign(payload, `${process.env.SECRET}`, {
      expiresIn: "720h"
    });
  }

  public static checkJwt(req: Request, res: Response, next: NextFunction) {
    //Get the jwt token from the head
    const token = <string>req.headers.authorization;
    let jwtPayload;

    //Try to validate the token and get data
    try {
      jwtPayload = <any>jwt.verify(token, `${process.env.SECRET}`);
      res.locals.jwtPayload = jwtPayload;
    } catch (error) {
      //If token is not valid, respond with 401 (unauthorized)
      res.status(401).json({ message: "forbidden, token not valid" });
      return;
    }

    //The token is valid for 1 hour
    //We want to send a new token on every request
    const { userId, username } = jwtPayload;
    const newToken = jwt.sign({ userId, username }, "Secret", {
      expiresIn: "720h"
    });
    res.setHeader("token", newToken);

    //Call the next middleware or controller
    next();
  }
}
