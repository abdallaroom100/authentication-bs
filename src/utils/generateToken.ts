 import { Response } from "express"
  import jwt from "jsonwebtoken"
import { setCookies } from "./set-cookies"
import mongoose from "mongoose"
export const generateToken = (userId:mongoose.Types.ObjectId,res:Response)=>{

    const token =  jwt.sign({userId},"secret",{
     expiresIn:"7d"
    })

    setCookies(token,res) 
    
}