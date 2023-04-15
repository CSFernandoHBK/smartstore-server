import { OrderNew, ProductNew } from "../../protocols";
import { forbiddenError, notFoundError } from "../../errors";
import orderRepository from "../../repositories/order-repository";
import productRepository from "../../repositories/product-repository";

async function getOrder(userId: number){
    const result = await orderRepository.getOrder(userId)
    result.forEach((a) => {delete a.userId});
    return result
}

async function getOrderById(userId: number, orderId: number){
    const result = await orderRepository.getOrderById(orderId)
    if(!result){
        throw notFoundError();
    }
    if(result.userId !== userId){
        throw forbiddenError();
    }
    delete result.userId;
    return result
}

async function getProductsbyOrderId(orderId: number): Promise<ProductNew[]>{
    const result: any = await orderRepository.getProductsbyOrderId(orderId)
    for(let i=0; i<result.length;i++){
        result[i].product = await productRepository.getProductById(result[i].productId);
    }
    return result
}

async function createOrder(userId: number, orderInfo: OrderNew){
    const result = await orderRepository.createOrder(userId, orderInfo)
    delete result.userId;
    return result
}

async function updateOrder(){
    
}

async function deleteOrder(userId: number, orderId: number){
    const verifyOrder = await orderRepository.getOrderById(orderId);
    if(!verifyOrder){
        throw notFoundError();
    }
    if(verifyOrder.userId !== userId){
        throw forbiddenError();
    }

    await orderRepository.deleteOrder(orderId);
}


const orderService = {
    getOrder,
    getOrderById,
    getProductsbyOrderId,
    createOrder,
    updateOrder,
    deleteOrder
};

export default orderService;