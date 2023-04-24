import { prisma } from "configs";

export async function cleanDb(){
    await prisma.finance.deleteMany({})
    await prisma.advertisement.deleteMany({})
    await prisma.image.deleteMany({})
    await prisma.order.deleteMany({})
    await prisma.orderProduct.deleteMany({})
    await prisma.product.deleteMany({})
    await prisma.sell.deleteMany({})
    await prisma.session.deleteMany({})
    await prisma.shipping.deleteMany({})
    await prisma.user.deleteMany({})
}