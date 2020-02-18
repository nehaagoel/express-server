import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel, userSchema } from './UserModel';
import VersionableRepository from '../versionable/VersionableRepository';
class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
      constructor() {
          super(userModel);
     }
     create = (data: any) => {
         return super.create(data);
     };
     count1 = () => {
         return super.count();
     }
     update1 = (id: string, data: any) => {
        return super.update(id, data);
     }
     list1 = (userRole, sort, skip, limit) => {
        return super.list(userRole, sort, skip, limit);
     }
     delete1 = (id: string) => {
        if (id !== undefined) {
            return super.delete(id);
           } else {
               console.log('Please enter Id');
            }
     };
}
export default UserRepository;