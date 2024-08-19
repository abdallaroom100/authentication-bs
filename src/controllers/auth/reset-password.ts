import { Request, Response } from "express"
import User from "../../models/user-model"
import validator from "validator"
import { sendResetPasswordSuccessEmail } from "../../utils/mailtrap/sendResetPasswordSuccessEmail"
import bcrypt from "bcryptjs"


export const resetPassword = async (req: Request, res: Response) => {
    const { password, confirmPassword } = req.body
    const {token} = req.params
    try {
        const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpiresAt: { $gt: Date.now() } })
        if (!user) return res.status(404).json({ message: "invalid or expired reset token", success: false })
        if (password != confirmPassword) return res.status(400).json({ message: "password and confirm password must be same", success: false })
        if (!validator.isStrongPassword(password)) return res.status(400).json({ message: "the password is not strong enough" })
        const hash = bcrypt.hashSync(password, 5)
        user.password = hash
        user.resetPasswordToken = undefined,
        user.resetPasswordExpiresAt = undefined
        await user.save()
        await sendResetPasswordSuccessEmail(user.email)
        res.status(200).json({message:"password has been reset successfully",success:true})
    } catch (error) {
        
        console.error((error as Error).message)
        res.status(400).json({message:(error as Error).message,success:false})
    }
}