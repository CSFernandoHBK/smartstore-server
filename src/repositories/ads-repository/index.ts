import { prisma } from "../../configs";
import { AdsNew } from "../../protocols";

async function getAds(userId: number){
    return prisma.advertisement.findMany({
        where:{
            userId: userId
        }
    })
}

async function getAdsById(adsId: number){
    return prisma.advertisement.findFirst({
        where:{
            id: adsId
        }
    })
}

async function createAds(userId: number, adsInfo: AdsNew){
    return await prisma.advertisement.create({
        data:{
            userId: userId,
            ...adsInfo
        }
    })
}

async function updateAds(){

}

async function deleteAds(adsId: number){
    return await prisma.advertisement.delete({
        where:{
            id: adsId
        }
    })
}

const adsRepository = {
    getAds,
    getAdsById,
    createAds,
    updateAds,
    deleteAds
}

export default adsRepository;