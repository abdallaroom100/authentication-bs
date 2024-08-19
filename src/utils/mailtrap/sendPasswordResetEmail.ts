import { Request, Response } from "express";
import { mailtrapclient, sender } from "./mailtrap.config";
import { PASSWORD_RESET_REQUEST_TEMPLATE } from "./email-templates";


export const setPassowrdResetEmail = async (email: string,resetUrl:string) => {
    const recipients = [{ email }]
  
    try {
  const response = await mailtrapclient.send({
        from: sender,
        to: recipients,
        subject: "reset password",
        html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetUrl),
        category: "reset password"
    })
    console.log("reset password email has been sent succesfully", response);
    } catch (error) {
        console.log((error as Error).message);
    }
}