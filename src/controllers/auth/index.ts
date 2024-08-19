import { NextFunction, Request, Response } from "express";
import { verifyEmail } from "./verify-email";
import { singUpUser } from "./signup";
import { loginUser } from "./login";
import { logoutUser } from "./logout";
import { forgetPassword } from "./forget-password";
import { resetPassword } from "./reset-password";
import { verifyUser } from "./middlewares/verify-user";
import { checkUser } from "./check-router";


export  class Auth {

   async verifyEmail(req:Request,res:Response){
     await verifyEmail(req,res)
   }


   async signUp(req:Request,res:Response){
   await singUpUser(req,res)
   }


   async login(req:Request,res:Response){
   await loginUser(req,res)
   }


   async logout(req:Request,res:Response){
     await logoutUser(req,res)
   }


   async forgetPassword(req:Request,res:Response){
     await forgetPassword(req,res)
   }


   
   async resetPassword(req:Request,res:Response){
     await resetPassword(req,res)
   }
   async verifyUser(req:Request,res:Response,next:NextFunction){
     await verifyUser(req,res,next)
   }
   async checkUser(req:Request,res:Response,next:NextFunction){
     await checkUser(req,res)
   }

}

export const user_auth  = new Auth()

