import * as mongoose from 'mongoose';
import UserSchema from './UserSchema';
import IUserModel from './IUserModel';

const toConvert = {
    transfers: (doc: any, ret: any) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret._v;
    }
};
export const userSchema = new UserSchema ({
    collection: 'Users',
    toJson: toConvert,
    toObject: toConvert,
});

export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>('user', userSchema, 'Users', true);