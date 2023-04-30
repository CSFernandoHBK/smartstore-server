import { prisma } from "../../src/configs";
import { faker } from "@faker-js/faker";

export async function generateProductBody(){
    return({
        name: faker.commerce.productName(),
        buyPrice: Number(faker.commerce.price(1000,3000,0)),
        sellPrice: Number(faker.commerce.price(4000,6000,0)),
        stock: Number(faker.random.numeric(1, {bannedDigits: ['0']}))    
    })
}