import { Request, Response, NextFunction } from 'express';
function checkRegex(stringtovalidate: string, regex: RegExp): boolean {
    return regex.test(stringtovalidate);
}
export default (config) => (req: Request, res: Response, next: NextFunction) => {
    console.log('CONFIG', config);
    console.log('Body', req.body);
    console.log('Query', req.query);
    console.log('Param', req.param);
    const validationKeys = Object.keys(config);
    validationKeys.forEach(validateKey => {
        const validationRules = config[validateKey];
        if (Object.keys(validationRules).includes('in')) {
            if (
                (validationRules.in.includes('body') && Object.keys(req.body).includes(validateKey))
                || (validationRules.in.includes('param') && Object.keys(req.params).includes(validateKey))
                || (validationRules.in.includes('query') && Object.keys(req.query).includes(validateKey))
            ) {
                if (Object.keys(validationRules).includes('required')) {
                    if (!validationRules.required)
                        next({ error: 'Error has Occured', message: validationRules.errorMessage , timestamp: new Date(), status: 500});
                        }
                    if (Object.keys(validationRules).includes('string')) {
                        if (!validationRules.string && typeof !req.body[validateKey] === 'string')
                            next({ error: 'Error has Occured', message: validationRules.errorMessage , timestamp: new Date(), status: 500});
                        }
                    if (Object.keys(validationRules).includes('number')) {
                        if (!validationRules.number  && typeof !req.body[validateKey] === 'number')
                           next({ error: 'Error has Occured', message: validationRules.errorMessage , timestamp: new Date(), status: 500});
                        }
                    if (Object.keys(validationRules).includes('isObject')) {
                        if (validationRules.number)
                            if (!validationRules.number  && !req.body[validateKey] )
                          next({ error: 'Error has Occured', message: validationRules.errorMessage , timestamp: new Date(), status: 500});
                            }
                    if (Object.keys(validationRules).includes('regex')) {
                        if (!checkRegex(req.body[validateKey], validationRules.regex))
                          next({ error: 'Error has Occured', message: validationRules.errorMessage , timestamp: new Date(), status: 500});
                    }
                    if (Object.keys(validationRules).includes('default')) {
                        if (!(validationRules.default === '0' && req.body[validateKey] === 'skip')
                            || !(validationRules.default === '10' && req.body[validateKey] === 'limit'))
                           next({ error: 'Error has Occured', message: validationRules.errorMessage , timestamp: new Date(), status: 500});
                    }
        }
    }
  });
};