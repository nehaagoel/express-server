let valid=[];
let invalid=[]; 
import {validateEmail} from "./helper";
export default function validateUsers(users)
{
    users.forEach((element) => {const {traineeEmail, reviewerEmail} = element;
     if(validateEmail(traineeEmail)&& validateEmail(reviewerEmail))
     {
	valid.push(traineeEmail);
	invalid.push(reviewerEmail);
     }
     else
     {
	 valid.push(traineeEmail); 
	invalid.push(reviewerEmail);
    }
})


console.log("valid Emails: "+ valid);
console.log("invlaid Email: " + invalid);
console.log("valid count: "+ valid.length);
console.log("invlaid count: "+ invalid.length); }
