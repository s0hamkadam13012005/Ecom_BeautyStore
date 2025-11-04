import express from 'express';
import {updateUser,deleteUser,getUser,getAllUser} from '../controller/user.controller.js';

const router = express.Router();

router.put("/:id",updateUser);

router.get("/find/:userId",getUser);

router.get("/",getAllUser);


router.delete(":id",deleteUser)

export default router;
