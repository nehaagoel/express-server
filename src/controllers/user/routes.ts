import { Response, Router } from 'express';
import UserController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import authmiddleware from '../../libs/routes/authMiddleWare';
import { IRequest } from '../../libs/interface';
import config from './validation';

const UserRouter = Router();

UserRouter.route('/me')
.get(authmiddleware('Users', 'all'), validationHandler(config.get), (req: IRequest, res: Response) => {
    res.send(req.user);
});
UserRouter.route('/login')
.post(UserController.login);

export default UserRouter;