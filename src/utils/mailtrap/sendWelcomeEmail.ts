
import { mailtrapclient, sender } from "./mailtrap.config"



export const sendWelcomeEmail = async (email: string, name: string) => {
    const recipients = [{ email:"abdallaroom25@gmail.com" }]
    try {
        const response = await mailtrapclient.send({
            from: sender,
            to: recipients,
            subject: "Verify Your Account",
            html:`<h2>Hi ${name}, Welcome to Our App</h2>`,
            category: "Email Verification"
        })
        console.log("email has been send succesfully", response);
    } catch (error) {
        console.error((error as Error).message)
        throw new Error("error in sendng email ")
    }
}