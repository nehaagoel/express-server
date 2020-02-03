import { Router } from 'express';
import TraineeController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';

const traineeRouter = Router();

traineeRouter.route('/')
.get(validationHandler(config.get), TraineeController.list)
.post(validationHandler(config.create), TraineeController.create)
.delete(validationHandler(config.delete), TraineeController.delete)
.put(validationHandler(config.update), TraineeController.update);

export default traineeRouter;
