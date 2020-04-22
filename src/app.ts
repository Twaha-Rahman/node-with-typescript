import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!');
});

app.listen('7000', () => {
  console.log('Running on port 7000...');
});
