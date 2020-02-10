import { Router } from 'express';
import UserController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import authmiddleware from '../../libs/routes/authMiddleWare';
import config from './validation';

const UserRouter = Router();

UserRouter.route('/')
.get(authmiddleware('getUsers', 'read'), validationHandler(config.get), UserController.list)
.post(authmiddleware('getUsers', 'read'), validationHandler(config.create), UserController.create)
.put(authmiddleware('getUsers', 'read'), validationHandler(config.update), UserController.update);
UserRouter.route('/:id')
.delete(authmiddleware('getUsers', 'read'), validationHandler(config.delete), UserController.delete) ;
export default UserRouter;