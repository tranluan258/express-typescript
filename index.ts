import express, { Application, Request, Response } from 'express';
import 'reflect-metadata';
import connection from './src/config/typeorm.db';
connection();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.json({ message: 'Welcome to api with typescript' });
});

app.listen(8080, (): void => console.log('listening on port 8080'));
