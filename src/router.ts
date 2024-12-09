import express, { Express, Request, Response } from 'express';
import * as jsonData from './json/data.json'

const router = express.Router();

export default (): express.Router => {
  router.get('/', (req: Request, res: Response) => {
    res.render('home', {jsonData: jsonData.internet});
  });

  router.get('/intranet', (req: Request, res: Response) => {
    res.render('home',{jsonData: jsonData.intranet});
  });
  return router;
};
