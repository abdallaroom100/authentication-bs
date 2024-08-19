import { Request, Response } from "express";
import User from "../../models/user-model";
import crypto from "crypto"
import { setPassowrdResetEmail } from "../../utils/mailtrap/sendPasswordResetEmail";
import { CLIENT } from "../../config/config";


export const forgetPassword = async (req: Request, res: Response) => {
    const { email } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) return res.status(404).json({ message: "user not found", success: true })
        const resetPasswordToken = crypto.randomBytes(20).toString("hex")
        const resetPasswordExpiresAt = `${Date.now() * 1 * 1000 * 60 * 60}`
        user.resetPasswordToken = `${resetPasswordToken}`
        user.resetPasswordExpiresAt = `${resetPasswordExpiresAt}`
        await user.save()
        await setPassowrdResetEmail(user.email,`${CLIENT.URL}/forget-password/${resetPasswordToken}`)

        return res.status(200).json({message:"reset password  has been sent successfully",success:true})
    } catch (error) {
        console.error((error as Error).message)
        res.status(400).json({message:(error as Error).message,success:false})
    }
}

