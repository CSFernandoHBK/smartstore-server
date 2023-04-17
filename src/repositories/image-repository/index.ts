import { prisma } from "../../configs";

async function imageUpload(userId: number, productId: number, link: string){
    return await prisma.image.create({
        data:{
            userId: userId,
            productId: productId,
            link: link
        }
    })
}

async function getImageByProductId(productId: number){
    return await prisma.image.findFirst({
        where:{
            productId: productId
        }
    })
}

const imageRepository = {
    imageUpload,
    getImageByProductId
}

export default imageRepository;