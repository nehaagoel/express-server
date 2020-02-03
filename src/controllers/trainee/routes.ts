import { Router } from 'express';
import TraineeController from './Controller';
const traineeRouter = Router();
traineeRouter.route('/')
.get(TraineeController.list)
.post( TraineeController.create)
.delete( TraineeController.delete)
.put(TraineeController.update);
export default traineeRouter;
