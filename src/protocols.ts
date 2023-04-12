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

export type AdsEntity = {
    id: number,
    userId: number,
    productId: number,
    title: string,
    description: string
}

export type Ads = Omit<AdsEntity, "id">

export type AdsNew = Omit<AdsEntity, "id" | "userId">

export type FinanceEntity = {
    id: number,
    userId: number,
    value: number,
    isEntry: boolean,
    description: string,
    date: Date
}

export type Finance = Omit<FinanceEntity, "id">

export type FinanceNew = Omit<FinanceEntity, "id" | "userId">



