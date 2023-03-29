import joi from "joi";

export const userSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required()
});

export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required()
});

export const productSchema = joi.object({
    name: joi.string().min(3).max(100).required(),
    buyPrice: joi.number().required(),
    sellPrice: joi.number().required(),
    stock: joi.number().required()
})

export const orderSchema = joi.object({
    value: joi.number().required(),
    date: joi.date().required()
})