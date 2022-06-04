import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
// import { Account } from '../entity/account.entity';
import Account, { IAccount } from '../schema/account.schema';
import shortUUID from 'short-uuid';
import accountModel from '../model/account.model';

export default {
  signUp: async (req: Request, res: Response): Promise<Response> => {
    try {
      const { username, password } = req.body;
      let result = await accountModel.signUp(username, password);
      return res.status(200).json({ message: 'Done', data: result });
    } catch (error) {
      console.log('Error sign up:', error);
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  signIn: async (req: Request, res: Response): Promise<Response> => {
    try {
      const { username, password } = req.body;
      let result = await accountModel.signIn(username, password);
      if (result) {
        let token = await jwt.sign(
          {
            username: result.username,
            id: result._id,
          },
          process.env.JWT_SECRET as string,
          {
            expiresIn: '1h',
          }
        );
        return res
          .status(200)
          .json({ message: 'Login successfully', accessToken: token });
      }
      return res.status(404).json({ message: 'Invalid username or password' });
    } catch (error) {
      console.log('Error sign in:', error);
      return res.status(500).json({ message: 'Error' });
    }
  },
};
