import * as mongoose from 'mongoose';
import IVersionDocument from '../versionable/IVersionableDocument';
export default interface IUserModel extends IVersionDocument {
            id: string;
            name: string;
            address: string;
            email: string;
            password: string;
            dob: Date;
            mobileNumber: number;
            role: string;
            hobbies: string[];
}