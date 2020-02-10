import { Router } from 'express';
import UserController from './Controller';
// import validationHandler from '../../libs/routes/validationHandler';
// import authmiddleware from '../../libs/routes/authMiddleWare';
// import config from './validation';

const UserRouter = Router();

UserRouter.route('/')
.get(UserController.list)
.post(UserController.create)
.put(UserController.update);
UserRouter.route('/:id')
.delete(UserController.delete) ;
export default UserRouter;