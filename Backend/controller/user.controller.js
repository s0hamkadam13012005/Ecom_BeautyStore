import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';


const updateUser = asyncHandler(async(req,res)=>{
    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password,salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {$set:req.body},
        {new:true,runValidators: true }
    )

    if(!updatedUser){
        throw new Error("user not updated");
        res.status(400);
    }

    res.status(200).json(updatedUser);
})

const deleteUser = asyncHandler(async(req,res)=>{
    const deletedUser = await User.findByIdAndDelete(
        req.params.id
    )

    if(!deleteUser){
        res.status(404);
        throw new Error("user not deleted");
    }

    res.status(200).json("user deleted successfully");
})

const getUser = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id);

    if(!user){
        res.status(404).json("User not Found");
    }
    else{
        res.status(200).json("User find");
    }
})

const getAllUser = asyncHandler(async(req,res)=>{
    const users = await User.find();
    if(!users){
    res.status(404);
    throw new Error("No user found");
  }
  else{
    res.status(200).json(users);
  }
})


export {updateUser,deleteUser,getUser,getAllUser};