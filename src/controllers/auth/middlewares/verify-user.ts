import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"


export const verifyUser  =  async (req:Request,res:Response,next:NextFunction)=>{
  const token = req.cookies.auth || ""
  console.log(req.headers);
  if(!token) return res.status(404).json({success:false,message:"unAuthorized"})
    try {
        jwt.verify(token,"secret",(err:any,decoded:any)=>{
     if(err){
      console.log(err);
      throw new Error((err as Error).message)
     }
      (req as any).userId = decoded.userId
      console.log((req as any).userId);
      next()
      }) 
      res.status(404).json({success:false,message:"unAuthorized"})
  } catch (error) {
    res.status(400).json({message:(error as Error).message,success:false})
  }
}