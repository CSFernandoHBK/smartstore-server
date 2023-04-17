import { OrderNew } from "../../protocols";
import { prisma } from "../../configs";

async function getOrder(userId: number){
    return prisma.order.findMany({
        where:{
            userId: userId
        }
    })
}

async function getOrderById(orderId: number){
    return prisma.order.findFirst({
        where:{
            id: orderId
        }
    })
}

async function getProductsbyOrderId(orderId: number){
    const result = await prisma.orderProduct.findMany({
        where:{
            orderId: orderId
        }
    })
    result.forEach((a) => {delete a.orderId; delete a.userId; delete a.id});
    return result;
}

async function createOrder(userId: number, orderInfo: OrderNew){
    return await prisma.order.create({
        data:{
            userId: userId,
            value: orderInfo.value,
            date: new Date(orderInfo.date)
        }
    })
}

async function addProductsForOrder(userId: number, orderId: number, products: number[]) {
    for(let i=0; i<products.length; i++){
        await prisma.orderProduct.create({
            data:{
                userId: userId,
                productId: products[i],
                orderId: orderId,
                quantity: 1
            }
        })
    }
}

async function updateOrder(){
    
}

async function deleteOrder(orderId: number){
    return await prisma.order.delete({
        where:{
            id: orderId
        }
    })    
}


const orderRepository = {
    getOrder,
    getOrderById,
    getProductsbyOrderId,
    createOrder,
    addProductsForOrder,
    updateOrder,
    deleteOrder
};

export default orderRepository;