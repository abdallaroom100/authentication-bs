import { PASSWORD_RESET_SUCCESS_TEMPLATE } from "./email-templates"
import { mailtrapclient, sender } from "./mailtrap.config"



export const sendResetPasswordSuccessEmail =async (email:string)=>{
 const recipients = [{email}]
 try {
    const response = await mailtrapclient.send({
        from:sender,
        to:recipients,
        subject:"password has been reset succesfully",
        html:PASSWORD_RESET_SUCCESS_TEMPLATE,
        category:"reset password"
      })

    console.log("password reset email has been sent successfully", response);

 } catch (error) {
    console.error((error as Error).message)
 }
  
}