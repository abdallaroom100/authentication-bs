import { Express } from "express"
import { userRouter } from "../routers"

const setApplicationRouters = (app:Express)=>{
    app.use("/auth",userRouter)
}

export default setApplicationRouters