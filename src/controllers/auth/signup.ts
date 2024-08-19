import { Request, Response } from "express"


import validator from "validator"
import bcrypt from "bcryptjs"
import { generateVerificationCode } from "../../utils/generate.verification.code"
import User from "../../models/user-model"
import mongoose from "mongoose"
import { sendVerificationEmail } from "../../utils/mailtrap/sendVerificationEmail"
import { generateToken } from "../../utils/generateToken"

export const singUpUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body
    try {
        if (!name || !email || !password)
            throw new Error("all fileds are required")
        const user = await User.findOne({ email })

        if (user) return res.status(400).json({ message: "this email is already exist", success: false })

        if (!validator.isStrongPassword(password))
            return res.status(400).json({ message: "password is not strong enough", success: false })

        const hash = bcrypt.hashSync(password, 5)

        const verificationToken = generateVerificationCode() 

        const newUser = await User.create({
            name,
            email,
            password: hash,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
        })
        generateToken(newUser._id as mongoose.Types.ObjectId, res)
        await sendVerificationEmail(newUser.email, verificationToken)
        return res.status(200).json({
            message: "usre created successfully",
            success: true,
            user: {
                ...(newUser.toObject()),
                password: undefined,
                verificationToken: undefined,
                verificationTokenExpiresAt: undefined
            }
        })
    } catch (error) {
        res.status(400).json({ error: (error as Error).message, success: false })
    }
}
