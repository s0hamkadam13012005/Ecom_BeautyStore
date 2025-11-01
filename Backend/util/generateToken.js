import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const generateToken = (res,userId) =>{
    const token = jwt.sign({userId},process.env.JWT_SEC,{
        expiresIn:"10d",
    });

    res.cookie('jwt',token,{
        httpOnly:true,
        maxAge:10*24*60*60*1000,
        sameSite:'strict',
        secure:process.env.NODE_ENV !== "development"
    })
}

export default generateToken;