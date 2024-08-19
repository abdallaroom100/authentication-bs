
import { Request, Response } from "express"

export const logoutUser = async (req:Request,res:Response)=>{
    try {
        res.clearCookie("auth")
        res.status(200).json({message:"logged  out succesfully",success:true})
    } catch (error) {
        console.log((error as Error).message);
        res.status(400).json({message:(error as Error).message,success:false})
    }
}