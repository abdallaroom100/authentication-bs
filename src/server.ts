// this user is already exist 
import "./config/config"
import "./routers/index"
import express from "express"
import startApp from "./setup";

const application = express()

startApp(application)




