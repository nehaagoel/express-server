import IUserModel from '../repositories/user/IUserModel';
import { Request } from 'express';
interface IAuth {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
}
interface Iperm {
    getUsers: IAuth;
    Users: IAuth;
}
interface IRequest extends Request {
    user: IUserModel;
}
export { Iperm, IRequest };