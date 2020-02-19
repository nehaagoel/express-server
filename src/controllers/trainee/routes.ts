import { Router } from 'express';
import TraineeController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import authmiddleware from '../../libs/routes/authMiddleWare';
import config from './validation';

const router = Router();

router.route('/')
.get(authmiddleware('getUsers', 'all'), validationHandler(config.get), TraineeController.list)
.post(authmiddleware('getUsers', 'read'), validationHandler(config.create), TraineeController.create)
.put(authmiddleware('getUsers', 'all'), validationHandler(config.update), TraineeController.update);
router.route('/:id')
.delete(authmiddleware('getUsers', 'all'), validationHandler(config.delete), TraineeController.delete);
export default router;