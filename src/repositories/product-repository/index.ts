import { ProductNew } from "protocols";
import { prisma } from "../../configs";


async function getProducts(userId: number){
    return await prisma.product.findMany({
        where:{
            userId: userId
        }
    })
}

async function getProductById(productId: number){
    return await prisma.product.findFirst({
        where:{
            id: productId
        }
    })
}

async function newProduct(userId: number, productInfo: ProductNew){
    return await prisma.product.create({
        data:{
            userId: userId,
            ...productInfo
        }
    })
}

async function updateProduct(){

}

async function deleteProduct(productId: number){
    return await prisma.product.delete({
        where:{
            id: productId
        }
    })
}




const productRepository = {
    getProducts,
    getProductById,
    newProduct,
    updateProduct,
    deleteProduct
};

export default productRepository;