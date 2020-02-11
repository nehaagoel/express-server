import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
class UserRepository {
    private userModel: mongoose.Model<IUserModel>;
            constructor() {
        this.userModel = userModel;
    }
    getObjectId() {
        return String( mongoose.Types.ObjectId());
    }
     create = (data: any) => {
         const userData = {
             _id: this.getObjectId(),
            ...data,
            };
         return this.userModel.create(userData);
     };
     findOne = (query: any): any => {
         return this.userModel.findOne(query);
     };
     count = () => {
         return this.userModel.countDocuments();
     }
     update = (id: string, data: any) => {
        return this.userModel.findByIdAndUpdate(id, data);
     }
     list = () => {
        return this.userModel.find();
     }
     delete = (id: string) => {
        if (id !== undefined) {
            return this.userModel.deleteOne({id});
           } else {
               console.log('please enter the id');
            }
     }
}
export default UserRepository;