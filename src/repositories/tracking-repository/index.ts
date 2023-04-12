import { prisma } from "../../configs";

async function getCodeByOrderId(orderId: number){
    return await prisma.shipping.findFirst({
        where:{
            orderId: orderId
        }
    })
}

const trackingRepository = {
    getCodeByOrderId
}

export default trackingRepository;