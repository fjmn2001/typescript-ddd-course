import {Request, Response, Router} from 'express';
import container from '../dependency-injection';
import {CoursePutController} from '../controllers/CoursePutController';
import {body} from 'express-validator';
import {validateReqSchema} from './index';

export const register = (router: Router) => {
  const reqSchema = [
    body('name').exists().isString(),
    body('duration').exists().isString()
  ];

  const coursePutController: CoursePutController = container.get('Apps.mooc.controllers.CoursePutController');
  router.put('/courses/:id', reqSchema, validateReqSchema, (req: Request, res: Response) => coursePutController.run(req, res));
};
