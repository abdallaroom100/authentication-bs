import express from "express"
import { user_auth } from "../controllers/auth"
const router = express.Router()

router.post("/signup",user_auth.signUp)

router.post("/login",user_auth.login)

router.post("/verify-email",user_auth.verifyEmail)

router.post("/logout",user_auth.logout)
router.post("/forget-password",user_auth.forgetPassword)
router.post("/reset-password/:token",user_auth.resetPassword)
router.post("/me",user_auth.verifyUser,user_auth.checkUser)


export default router