import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.post('/sign-up', (req: Request, res: Response) => {
  const { username, password }: { username: string; password: string } =
    req.body;
});
