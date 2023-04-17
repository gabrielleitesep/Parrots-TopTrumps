import Joi, { Schema } from 'joi';
import { NextFunction, Request, Response} from "express";

export const validate = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const { error } = schema.validate(payload);

    if (error) {
        const errors = error.details.map(detail => detail.message);
        return res.status(422).send({
            message: "Unprocessable Entity",
            errors,
        });
    }

    next();
};
