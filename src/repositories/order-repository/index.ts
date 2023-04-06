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
    return prisma.orderProduct.findMany({
        where:{
            orderId: orderId
        }
    })
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
    updateOrder,
    deleteOrder
};

export default orderRepository;