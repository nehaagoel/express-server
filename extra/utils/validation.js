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
count=0;
count2=0;
valid=[];
invalid=[]; 
function validateEmail(x)
{
   const regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/;
   y=regex.test(x);

    if(y==true) 
        valid.push(x);
    else 
        invalid.push(x);
    return(y);
}
function validateUsers(users)
{
    users.forEach((element) => {const {traineeEmail, reviewerEmail} = element;
        check=validateEmail(traineeEmail);
    if(check==true) 
        count++;
    else 
        count2++;
    check1=validateEmail(reviewerEmail);
    if(check1==true) 
        count++;
    else 
        count2++; })
}
validateUsers(users);
console.log("valid Emails: "+ valid);
console.log("invlaid Email: " + invalid);
console.log("valid count: "+ count);
console.log("invlaid count: "+ count2);   