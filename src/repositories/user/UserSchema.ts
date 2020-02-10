import * as mongoose from 'mongoose';
class UserSchema extends mongoose.Schema {
    constructor(options: any) {
        const userSchema = {
            id: String,
            name: String,
            address: String,
            email: String,
            dob: Date,
            mobileNumber: Number,
            role: String,
            hobbies: [String]
        };
        super(userSchema, options);
    }
}
export default UserSchema;