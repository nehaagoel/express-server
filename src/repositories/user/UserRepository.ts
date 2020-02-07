import { IUserCreate } from './entities';
import { Mongoose } from 'mongoose';
import IUserModel from './IUserModel';
class UserRepository {
    private userModel: mongoose.Model<IUserModel>
        constructor() {
        this.userModel = this.userModel;
    }
     create = (data: IUserCreate) => {
         return this.userModel.create(data);
     }
     count = () => {
         return this.userModel.countDocuments();
     }
     update = () => {

     }
     list = () => {

     }
     delete = () => {

     }
}
export default UserRepository;