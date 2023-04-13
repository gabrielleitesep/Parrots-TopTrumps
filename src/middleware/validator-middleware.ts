import { validator } from "../schema/user-schema.js";
import { NextFunction, Request, Response} from "express";

export const validate = schema => (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const { error } = validator(schema, payload);

    if (error) {
        const errors = error.details.map(detail => detail.message);
        return res.status(422).send({
            message: "Unprocessable Entity",
            errors,
        });
    }

    next();
};