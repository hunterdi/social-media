import * as Joi from "joi";

export const userDTOSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeatPassword: Joi.ref('password'),

}).options({ abortEarly: false, allowUnknown: true });