import { Request, Response } from "express";
import User from "../../models/user-model";
import { sendWelcomeEmail } from "../../utils/mailtrap/sendWelcomeEmail";

export const verifyEmail = async (req: Request, res: Response) => {
    const { token } = req.body
    try {
        const user = await User.findOne({ verificationToken: token, verificationTokenExpiresAt: { $gt: Date.now() } })
        if (!user) return res.status(404).json({ message: "invalid or expired verification code", success: false })
        user.isVerified = true
        user.verificationToken = undefined
        user.verificationTokenExpiresAt = undefined
        await user.save()
        sendWelcomeEmail(user.email, user.name)
        return res.status(200).json({ message: "the account has been verified successfully", success: true })

    } catch (error) {
        throw new Error("error in verify email")
    }
}