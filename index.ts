import express, { Application, Request, Response } from 'express';
import 'reflect-metadata';
import accountRoute from './src/router/account.routes';
// import connection from './src/config/typeorm.db';
import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
// connection();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response): Response => {
  return res.json({ message: 'Welcome to api with typescript' });
});

app.use('/user', accountRoute);

app.listen(8080, (): void => {
  connect('mongodb://localhost:27017/hospital')
    .then(() => {
      console.log('listening on port 8080');
    })
    .catch((err) => {
      console.log('Connect db failed:', err);
    });
});
