export default {
    create: {
        name: {
            required: true,
            regex: /^[a-zA-Z0-9\-]+$/,
            in: ['body'],
            errorMessage: 'Name is required',
        },
        address: {
            required: true,
            in: ['body'],
            string: true,
            errorMessage: 'Address is required',
        },
        email: {
            required: true,
            string: true,
            regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/,
            in: ['body'],
            errorMessage: 'Email is required',
        },
        mobileNumber: {
            required: true,
            number: true,
            in: ['body'],
            errorMessage: 'Number is required',
        }
    },
    delete: {
        id: {
            required: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        }
    },
    update: {
        id: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'ID is required'
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            errorMessage: 'Data is invalid',
            custom: (value: any) => {
                    console.log('Value', value);
                    if (typeof value !== 'object') {
                        return true;
                    }
                    else {
                    return false;
                    }
                }
            },
        }
    };