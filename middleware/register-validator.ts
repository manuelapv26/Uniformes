import {check, validationResult } from 'express-validator'
import { Request, Response, NextFunction } from 'express';

export let validatorParams = [
    check('email').isEmail(),
    check('nombres').isLength({ min: 1, max: 150}).isString(),
    check('apellidos').isLength({ min: 1, max: 5}).isString(),
    check('telefono').isLength({min:10, max:10}).isString(),
    check('domicilio').isLength({min:10, max:80}).isString(),
    check('password').isLength({ min: 8, max: 15}),
];

export function validator(req: Request, res:Response, next:NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}