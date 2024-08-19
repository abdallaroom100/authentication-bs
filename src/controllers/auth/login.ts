import { Request, Response } from "express"
import bcrypt from "bcryptjs"
import User from "../../models/user-model"
import { generateToken } from "../../utils/generateToken"
import mongoose from "mongoose"



export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: "invalid credentials" })

        const Vpassword = bcrypt.compareSync(password, user.password)
        if (!Vpassword) return res.status(400).json({ message: "invalid credentials" })

        user.lastLogin = new Date()
        await user.save()
        generateToken(user._id as mongoose.Types.ObjectId, res)
        res.status(200).json({
            success: true,
            user: {
                ...(user.toObject()),
                password: undefined,
                verificationToken: undefined,
                verificationTokenExpiresAt: undefined
            }
        })
    } catch (error) {
        console.log("the error happend in the login ")
        console.log(error)
    }
}


 