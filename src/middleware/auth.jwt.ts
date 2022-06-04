import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IGetUserAuthInfoRequest extends Request {
  user: any;
}

export default function (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) {
  let auth = req.header('Authorization');
  if (auth) {
    let token = auth.split(' ')[1];
    if (!token) {
      return res.status(300).json({ message: 'Please enter token.' });
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, data) => {
      if (err) {
        return res
          .status(300)
          .json({ message: 'Invalid token or expired time' });
      }
      req.user = data;
      next();
    });
  } else {
    return res.status(300).json({ message: 'Please enter header value' });
  }
}
