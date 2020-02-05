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
                next({ error: 'Error has Occured', message: config[key].errorMessage , timestamp: new Date(), status: 500});
            }
        }
    });
    next();
};


//         if (Object.keys(validationRules).includes('in')) {
//             if (
//                 (validationRules.in.includes('body') && Object.keys(req.body).includes(validateKey))
//                 || (validationRules.in.includes('param') && Object.keys(req.params).includes(validateKey))
//                 || (validationRules.in.includes('query') && Object.keys(req.query).includes(validateKey))
//             ) {
//                 if (Object.keys(validationRules).includes('required')) {
//                     if (!validationRules.required )
//                         next({ error: 'Error has Occured', message: validationRules.errorMessage , timestamp: new Date(), status: 500});
//                         }
//                     if (Object.keys(validationRules).includes('string')) {
//                         if (!validationRules.string && typeof !req.body[validateKey] === 'string')
//                             next({ error: 'Error has Occured', message: validationRules.errorMessage , timestamp: new Date(), status: 500});
//                         }
//                     if (Object.keys(validationRules).includes('number')) {
//                         if (!validationRules.number  && typeof !req.body[validateKey] === 'number')
//                            next({ error: 'Error has Occured', message: validationRules.errorMessage , timestamp: new Date(), status: 500});
//                         }
//                     if (Object.keys(validationRules).includes('isObject')) {
//                         if (validationRules.number)
//                             if (!validationRules.number  && !req.body[validateKey] )
//                           next({ error: 'Error has Occured', message: validationRules.errorMessage , timestamp: new Date(), status: 500});
//                             }
//                     if (Object.keys(validationRules).includes('regex')) {
//                         if (!checkRegex(req.body[validateKey], validationRules.regex))
//                           next({ error: 'Error has Occured', message: validationRules.errorMessage , timestamp: new Date(), status: 500});
//                     }
//                     if (Object.keys(validationRules).includes('default')) {
//                         if (!(validationRules.default === '0' && req.body[validateKey] === 'skip')
//                             || !(validationRules.default === '10' && req.body[validateKey] === 'limit'))
//                            next({ error: 'Error has Occured', message: validationRules.errorMessage , timestamp: new Date(), status: 500});
//                     }
//                     if (Object.keys(validationRules).includes('custom')) {
//                         if (!validationRules.custom(req.body))
//                             next({ error: 'Error has Occured', message: validationRules.errorMessage , timestamp: new Date(), status: 500});
//                             }
//         }
//     }
//   });
// };