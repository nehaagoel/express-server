import { Request, Response, NextFunction } from 'express';

export default (config) => {
    return (req: Request, res: Response, next: NextFunction): void {
    console.log('The config is', config);
    console.log('The request body is', req.body);
    Object.keys(config).forEach (key => {
    const validationHandler = function (config) {
    return (req, res, next) => {
        const body = Object.keys(req.body);
        const configKeys = Object.keys(config);
        configKeys.forEach((Element, next) => {
            const keys = (Object.keys(config[Element]));
            if (keys.includes('required')) {
                if (!Object.keys(config[Element].required) && !body.includes('id')) {
                    console.log('id is present');
                }
            }
        });
        next();
    };
};