import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';
class UserSchema extends VersionableSchema {
    constructor(options: any) {
        const userSchema = {
            id: String,
            name: String,
            address: String,
            email: String,
            password: String,
            dob: Date,
            mobileNumber: Number,
            role: String,
            hobbies: [String]
        };
        super(userSchema, options);
    }
}
export default UserSchema;