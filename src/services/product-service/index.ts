import { ProductNew } from "../../protocols";
import { forbiddenError, notFoundError } from "../../errors";
import productRepository from "../../repositories/product-repository";

async function getProducts(userId: number){
    const result = await productRepository.getProducts(userId);
    result.forEach((a) => {delete a.userId});
    return result
}

async function getProductById(userId: number, productId: number){
    const result = await productRepository.getProductById(productId);
    if(!result){
        throw notFoundError();
    }
    if(result.userId !== userId){
        throw forbiddenError();
    }
    delete result.userId;
    return result;
}

async function newProduct(userId: number, productInfo: ProductNew){
    const result = await productRepository.newProduct(userId, productInfo);
    delete result.userId;
    return result;
}

async function updateProduct(){

}

async function deleteProduct(userId: number, productId: number){
    const verifyProduct = await productRepository.getProductById(productId);

    if(!verifyProduct){
        throw notFoundError();
    }
    if(verifyProduct.userId !== userId){
        throw forbiddenError();
    }

    await productRepository.deleteProduct(productId);
}




const productService = {
    getProducts,
    getProductById,
    newProduct,
    updateProduct,
    deleteProduct
};

export default productService;