import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';
import hasPermission from '../permissions';
import { Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import { IRequest } from '../interface';

const userRepository = new UserRepository();
const Error = (next: NextFunction) => {
    return next({
        status: 401,
        error: 'Unauthorized Access',
        message: 'Unauthorized Access'});
};

export default (moduleName: any, permissionType: any) => (req: IRequest, res: Response, next: NextFunction) => {
    console.log(' AUTHMIDDLEWARE ', moduleName, permissionType);
        const token = req.headers.authorization;
        const { secretKey } = configuration;
        const decodedUser = jwt.verify(token, secretKey);

        if (!decodedUser) {
            Error(next);
        }
        const { id, email } = decodedUser;
        userRepository.findOne({_id: id, email })
        .then( result => {
            if (!result) {
                Error(next);
            }
            req.user = result;
        const role: string = req.user.role;
        if (!hasPermission(moduleName, role, permissionType)) {
            Error(next);
        }
        next();
    })
    .catch ((error: any) => {
        Error(next);
    });
};