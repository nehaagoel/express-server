import { Router } from 'express';
import traineeRouter from './controllers/trainee/routes';
import UserRouter from './controllers/user/routes';

const mainRouter = Router();

mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/user', UserRouter);

export default mainRouter;