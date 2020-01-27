const users =

    [
        {
        traineeEmail: 'neha.goel@successive.tech',
        reviewerEmail: 'megha.raw@successive.tech',
        },
        {
        traineeEmail: 'shivam.sharma@sucssive.tech',
        reviewerEmail: 'meghaa.rawat@successive.tech',
        },
        {
        traineeEmail: 'nehaa@successive.tech',
        reviewerEmail: 'megha.r@suessive.tech',
        }
    ];
valid=[];
invalid=[]; 
function validateEmail(x)
{
   const regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/;
   return regex.test(x);

}
function validateUsers(users)
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
    })
}
validateUsers(users);
console.log("valid Emails: "+ valid);
console.log("invlaid Email: " + invalid);
console.log("valid count: "+ valid.length);
console.log("invlaid count: "+ invalid.length);
