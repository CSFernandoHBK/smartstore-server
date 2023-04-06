import adsRepository from "../../repositories/ads-repository";
import { AdsNew } from "../../protocols";
import { forbiddenError, notFoundError } from "../../errors";
import productRepository from "../../repositories/product-repository";

async function getAds(userId: number){
    const result = await adsRepository.getAds(userId)
    return result
}

async function getAdsById(userId: number, adsId: number){
    const result = await adsRepository.getAdsById(adsId)
    if(!result){
        throw notFoundError();
    }
    if(result.userId !== userId){
        throw forbiddenError();
    }
    delete result.userId;
    return result
}

async function createAds(userId: number, adsInfo: AdsNew){
    const verifyInfo = await productRepository.getProductById(adsInfo.productId);

    if(verifyInfo.userId !== userId){
        throw forbiddenError();
    }

    const result = await adsRepository.createAds(userId, adsInfo)
    delete result.userId;
    return result;
}

async function updateAds(){

}

async function deleteAds(userId: number, adsId: number){
    const verifyAds = await adsRepository.getAdsById(adsId);
    if(!verifyAds){
        throw notFoundError();
    }
    if(verifyAds.userId !== userId){
        throw forbiddenError();
    }

    await adsRepository.deleteAds(adsId);
}

const adsService = {
    getAds,
    getAdsById,
    createAds,
    updateAds,
    deleteAds
}

export default adsService;
