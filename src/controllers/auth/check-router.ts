import { Request, Response } from "express";
import User from "../../models/user-model";




export const checkUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findById((req as any).userId)

        if (!user) return res.status(403).json({ message: "user not found", success: false })

        res.status(200).json({ ...(user.toObject()), password: undefined })

    } catch (error) {
        res.status(400).json({ message: (error as Error).message, success: false })
    }
}