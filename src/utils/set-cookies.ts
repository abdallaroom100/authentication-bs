import {Response} from "express"
import { SERVER } from "../config/config"

export function setCookies(token:string,res:Response){
   return res.cookie("auth",token,{
    httpOnly:true,
    secure: SERVER.NODE_ENV === "PRODUCTION" ,
    sameSite:"strict",
    maxAge: 7 * 60 * 60 * 1000 * 24
 })
}