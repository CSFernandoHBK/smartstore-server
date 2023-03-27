export type ApplicationError = {
    name: string;
    message: string;
};

export type Product = {
    id: number,
    userId: number,
    name: string,
    buyPrice: number,
    sellPrice: number,
    stock: number
};