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
   y=regex.test(x);

    if(y) 
        valid.push(x);
    else 
        invalid.push(x);
    return(y);
}
function validateUsers(users)
{
    users.forEach((element) => {const {traineeEmail, reviewerEmail} = element;
     check=validateEmail(traineeEmail);
    check1=validateEmail(reviewerEmail); 
    })
}
validateUsers(users);
console.log("valid Emails: "+ valid);
console.log("invlaid Email: " + invalid);
console.log("valid count: "+ valid.length);
console.log("invlaid count: "+ invalid.length); 