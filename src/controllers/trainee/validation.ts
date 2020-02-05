import { NextFunction } from 'express';
export default {
    create: {
        id: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'ID is required'
        },
        name: {
            required: true,
            regex: /^[a-zA-Z0-9\-]+$/,
            in: ['body'],
            errorMessage: 'Name is required',
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
            custom: (reqMethod: any, req: Request): void => {
                    if (req[reqMethod].skip === undefined) {
                    req[reqMethod].skip = '0';
                }
            }
        },
        limit: {
            required: false,
            default: 10,
            regex: /^[0-9]*$/,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
            custom: (reqMethod: any, req: Request): void => {
                if (req[reqMethod].limit === undefined) {
                    req[reqMethod].limit = '10';
                }
            }
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
            custom: (dataToUpdate) => {
                    console.log('Value', dataToUpdate);
                    throw {
                        error: 'Error has Occured',
                        message: 'Message'
                    };
                }
            },
        }
    };