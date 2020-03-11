import { Request, Response, NextFunction } from 'express';
export default (config) => (req: Request, res: Response, next: NextFunction) => {
    console.log('CONFIG', config);
    console.log('Body', req.body);
    console.log('Query', req.query);
    console.log('Param', req.params);
    Object.keys(config).forEach(key => {
        const keys = Object.keys(config[key]);
        const { regex } = config[key];
        const { in: reqMethod } = config[key];
        if (keys.includes('required') && config[key].required === true) {
            if (req[reqMethod][key] === undefined || req[reqMethod][key] === null) {
               return next({ error: 'Error has Occured', message: config[key].errorMessage , timestamp: new Date(), status: 500});
            }
        }
        if (keys.includes('regex')) {
            if (!regex.test(req[reqMethod][key])) {
               return next({ error: 'Error has Occured', message: config[key].errorMessage , timestamp: new Date(), status: 500});
            }
        }
        if (config[key].custom !== undefined) {
            if (config[key].custom(req[reqMethod].dataToUpdate)) {
               return next({ error: 'Error has Occured', message: config[key].errorMessage , timestamp: new Date(), status: 500});
            }
            else {
            console.log('valid data');
            }
        }
    });
    next();
};