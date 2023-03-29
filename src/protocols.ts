import { type } from "os";

export type ApplicationError = {
    name: string;
    message: string;
};

export type ProductEntity = {
    id: number,
    userId: number,
    name: string,
    buyPrice: number,
    sellPrice: number,
    stock: number
};

export type Product = Omit<ProductEntity, "id">

export type ProductNew = Omit<ProductEntity, "id" | "userId">

export type OrderEntity = {
    id: number,
    userId: number,
    value: number,
    date: Date
}

export type Order = Omit<OrderEntity, "id">

export type OrderNew = Omit<OrderEntity, "id" | "userId">

