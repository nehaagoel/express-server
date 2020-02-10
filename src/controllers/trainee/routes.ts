import { Router } from 'express';
import TraineeController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import authmiddleware from '../../libs/routes/authMiddleWare';
import config from './validation';

const router = Router();

router.route('/')
.get(authmiddleware('getUsers', 'read'), validationHandler(config.get), TraineeController.list)
.post(authmiddleware('getUsers', 'read'), validationHandler(config.create), TraineeController.create)
.delete(authmiddleware('getUsers', 'read'), validationHandler(config.delete), TraineeController.delete)
.put(authmiddleware('getUsers', 'read'), validationHandler(config.update), TraineeController.update);
export default router;