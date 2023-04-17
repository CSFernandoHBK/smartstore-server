import { forbiddenError, notFoundError } from "../../errors";
import imageRepository from "../../repositories/image-repository";

async function imageUpload(userId: number, productId: number, link: string){
    const result = await imageRepository.imageUpload(userId, productId, link);
    delete result.userId;
    delete result.productId;
    return result
}

async function getImageByProductId(userId: number ,productId: number){
    const result = await imageRepository.getImageByProductId(productId);
    if(!result){
        throw notFoundError();
    }
    if(result.userId !== userId){
        throw forbiddenError();
    }
    return result
}

const imageService = {
    imageUpload,
    getImageByProductId
}

export default imageService;