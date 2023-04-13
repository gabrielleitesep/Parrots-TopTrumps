import joi, { Schema } from 'joi';
import { Payload } from '@prisma/client/runtime';

export const validator = (schema: Schema, payload: Payload) =>
    schema.validate(payload, { abortEarly: false });

export const signInJOI = joi.object({
    email: joi.string().email().required().min(1),
    password: joi.string().required().min(1),
});

export const signUpJOI = joi.object({
    email: joi.string().email().required().min(1),
    password: joi.string().required().min(1).max(20),
    username: joi.string().required().min(1).max(20),
});
