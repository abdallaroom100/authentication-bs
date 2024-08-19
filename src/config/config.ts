import dotenv from "dotenv"
dotenv.config()

export const  DEVELOPMENT = process.env.NODE_NODE === "development" 
export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME
export const SERVER_PORT = process.env.SERVER_PORT || 5000
export const DB_URL= process.env.DB_URL|| ""
export const isInDevelopment  = process.env.NODE_ENV || "PRODCUTION"
export const CLIENT_URL = process.env.CLIENT_URL
console.log(DB_URL);
export const SERVER = {
    SERVER_HOSTNAME, 
    SERVER_PORT,
    NODE_ENV:isInDevelopment
}
export const CLIENT = {
    URL:CLIENT_URL
}
console.log(CLIENT.URL);
 export const DATABASE = {  
    URL:DB_URL 
 }