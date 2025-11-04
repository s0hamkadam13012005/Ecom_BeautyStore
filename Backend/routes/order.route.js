import express from 'express'
import { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders} from '../controller/order.controller'
const router = express.router()

router.put('/:id',updateOrder);

router.delete("/:id",deleteOrder);

router.post("/",createOrder);

router.get("/find/:userId",getUserOrder);

router.get("/",protect,getAllOrders);


export default router;
