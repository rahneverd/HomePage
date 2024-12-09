import express, { Express, Request, Response } from 'express';
// import authentication from './authentication';

const router = express.Router();

export default (): express.Router => {
  router.get('/', (req: Request, res: Response) => {
    res.render('home');
  });
  return router;
};
