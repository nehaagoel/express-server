import { Iperm }  from './interface';
const permissions: Iperm = {
    'getUsers': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [],
        },
        'Users': {
            all: ['head-trainer'],
            read : ['trainee', 'trainer'],
            write : ['trainer'],
            delete: [],
            }

};
export { permissions };