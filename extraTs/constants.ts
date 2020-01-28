import { Iuser } from './interfaces';
import { Ipermission } from './interfaces';
const users: Iuser[] =

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

const permissions: Ipermission = {
        'getUsers': {
            all: ['head-trainer'],
            read : ['trainee', 'trainer'],
            write : ['trainer'],
            delete: [],
            }
};
export { users, permissions };