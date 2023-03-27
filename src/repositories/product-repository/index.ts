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

async function newProduct(){
    
}

async function updateProduct(){

}

async function deleteProduct(){

}




const productRepository = {
    getProducts,
    getProductById,
    newProduct,
    updateProduct,
    deleteProduct
};

export default productRepository;