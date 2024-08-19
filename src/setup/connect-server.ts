
import { Express } from "express"
import { SERVER } from "../config/config"
const serverConnection = (app: Express) => {
    app.listen(SERVER.SERVER_PORT, () => {
        console.log('server is connectd successfully ');
    })
}

export default serverConnection