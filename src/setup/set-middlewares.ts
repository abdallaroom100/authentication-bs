import cookieParser from "cookie-parser"
import express,{ Express } from "express"
import cors from 'cors'
const setApplicationMiddlwares = (app:Express)=>{
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
}

export default setApplicationMiddlwares