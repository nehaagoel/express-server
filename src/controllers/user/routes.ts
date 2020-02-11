import { Response, Router } from 'express';
import UserController from './Controller';
import authmiddleware from '../../libs/routes/authMiddleWare';
import { IRequest } from '../../libs/interface';

const UserRouter = Router();

UserRouter.route('/')
.get(authmiddleware('Users', 'all'), UserController.list)
.post(authmiddleware('Users', 'all'), UserController.create)
.put(authmiddleware('Users', 'all'),  UserController.update);
UserRouter.route('/:id')
.delete(authmiddleware('Users', 'all'), UserController.delete) ;
UserRouter.route('/me')
.get(authmiddleware('Users', 'all'), (req: IRequest, res: Response) => {
    res.send(req.user);
});
export default UserRouter;