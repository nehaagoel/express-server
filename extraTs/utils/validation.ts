const valid: string[] = [];
const invalid: string[] = [];
import { validateEmail } from './helper';
import { Iuser } from '../interfaces';
export default function validateUsers(users: Iuser[]): void {
    users.forEach((element: Iuser) => {const {traineeEmail, reviewerEmail} = element;
     if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
valid.push(traineeEmail);
invalid.push(reviewerEmail);
     }
     else   {
 valid.push(traineeEmail);
invalid.push(reviewerEmail);
    }
});


console.log('valid Emails: ' + valid);
console.log('invlaid Email: ' + invalid);
console.log('valid count: ' + valid.length);
console.log('invlaid count: ' + invalid.length); }
