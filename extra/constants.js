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

const permissions = 
    {
        'getUsers': {
            all: ['head-trainer'],
            read : ['trainee', 'trainer'],
            write : ['trainer'],
            delete: [],
            }
    
    };
export {users,permissions};