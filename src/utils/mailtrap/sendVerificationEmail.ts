import { MailtrapClient } from "mailtrap"
import { mailtrapclient, sender } from "./mailtrap.config"
import { VERIFICATION_EMAIL_TEMPLATE } from "./email-templates"


export const sendVerificationEmail = async (email: string, verificationToken: string) => {
    const recipients = [{ email:"abdallaroom25@gmail.com" }]
    try {
        const response = await mailtrapclient.send({
            from: sender,
            to: recipients,
            subject: "Verify Your Account",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })
        console.log("email has been send succesfully", response);
    } catch (error) {
        console.error((error as Error).message)
        throw new Error("error in sendng email ")
    }
}