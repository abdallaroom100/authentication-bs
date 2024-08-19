import { Express } from "express"
import { SERVER } from "../config/config"
import setApplicationRouters from "./set-routers"
import connectDatabase from "../database/connection"
import serverConnection from "./connect-server"
import setApplicationMiddlwares from "./set-middlewares"
import cookieParser from "cookie-parser"



const startApp = async (app: Express) => {
    /**
     * set middlewares
    */
 
    setApplicationMiddlwares(app)
    /**
     * set application routers
     */
    setApplicationRouters(app)

    /**
     * connecting to database 
     */
    await connectDatabase()

    serverConnection(app)
}

export default startApp

