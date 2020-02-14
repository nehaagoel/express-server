import { Response, Router } from 'express';
import UserController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import authmiddleware from '../../libs/routes/authMiddleWare';
import { IRequest } from '../../libs/interface';
import config from './validation';

const UserRouter = Router();

UserRouter.route('/')
.get(authmiddleware('Users', 'all'), validationHandler(config.get), UserController.list)
.post(authmiddleware('Users', 'all'), validationHandler(config.create), UserController.create)
.put(authmiddleware('Users', 'all'), validationHandler(config.update), UserController.update);
UserRouter.route('/:id')
.delete(authmiddleware('Users', 'all'), validationHandler(config.delete), UserController.delete) ;
UserRouter.route('/me')
.get(authmiddleware('Users', 'all'), validationHandler(config.get), (req: IRequest, res: Response) => {
    res.send(req.user);
});
UserRouter.route('/login')
.post(authmiddleware('Users', 'all'), UserController.login);

export default UserRouter;