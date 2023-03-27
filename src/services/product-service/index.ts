import { forbiddenError, notFoundError } from "../../errors";
import productRepository from "../../repositories/product-repository";

async function getProducts(userId: number){
    return await productRepository.getProducts(userId);
}

async function getProductById(userId: number, productId: number){
    const result = await productRepository.getProductById(productId);
    if(!result){
        throw notFoundError();
    }
    if(result.userId !== userId){
        throw forbiddenError();
    }
    return result;
}

async function newProduct(){

}

async function updateProduct(){

}

async function deleteProduct(){

}




const productService = {
    getProducts,
    getProductById,
    newProduct,
    updateProduct,
    deleteProduct
};

export default productService;