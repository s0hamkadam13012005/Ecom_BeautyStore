import express from 'express';
import{ createProduct,updateProduct,deleteProduct,getProduct,getAllProducts,  ratingProduct} 
from '../controller/product.controller.js'


const router = express.Router();

router.get("/:id",getProduct)

router.get("/",getAllProducts)

router.post("/",createProduct)

router.put("rating/:productId",ratingProduct)

router.put("/:id",updateProduct);

router.delete("/:id",deleteProduct);

export default router; 