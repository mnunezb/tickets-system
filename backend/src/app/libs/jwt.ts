import { NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { User } from '../models/user';

export class Auth {
  public static createToken(user: User) {
    const payload = {
      username: user.name,
      name: user.name,
      lastName: user.lastName,
      userRole: user.userRole,
    };

    return jsonwebtoken.sign(payload, process.env.SECRET as string, {
      expiresIn: '720h',
    });
  }

  public static checkJwt(req: Request, res: Response, next: NextFunction) {
    // Get the jwt token from the head
    const token = req.headers.authorization as string;
    let jwtPayload;

    // Try to validate the token and get data
    try {
      jwtPayload = jsonwebtoken.verify(token, process.env
        .SECRET as string) as any;
      res.locals.jwtPayload = jwtPayload;
    } catch (error) {
      // If token is not valid, respond with 401 (unauthorized)
      res.status(401).json({ message: 'forbidden, token not valid' });
      return;
    }

    // The token is valid for 1 hour
    // We want to send a new token on every request
    const { userId, username } = jwtPayload;
    const newToken = jsonwebtoken.sign({ userId, username }, 'Secret', {
      expiresIn: '720h',
    });
    res.setHeader('token', newToken);

    // Call the next middleware or controller
    next();
  }

  public static decode(token: string) {
    return jsonwebtoken.decode(token);
  }
}
