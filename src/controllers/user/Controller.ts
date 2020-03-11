import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse';
import * as bcrypt from 'bcrypt';
import config from '../../config/configuration';

class UserController {
    static instance: any;
    private userRepository: UserRepository = new UserRepository();
    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }
    login = async (req: any, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body;
            const user = await this.userRepository.findOne({ email });
            if (!user) {
                return next({
                    error: 'User not found',
                    status: 404
                });
            }
            const result = await bcrypt.compare(password, user.password);
            console.log('Result is ', result);
            if (!result) {
                return next({
                    error: 'Password didnt match',
                    status: 422
                });
            }
            console.log('Password matched');
            const token = jwt.sign({ email: user.email, id: user.originalId }, config.secretKey);
            res.status(200).send({
                message: 'Login Successful',
                data: token,
                status: 'Success'
            });
        } catch (err) {
            next({ error: err.message });
        }
    }
}
export default UserController.getInstance();