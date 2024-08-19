import mongoose from "mongoose"
import { DATABASE } from "../config/config"


const connectDatabase = async(): Promise<void> => {
  try {
    await mongoose.connect(DATABASE.URL)
    console.log("DB connecte succesfully")
  } catch (error) {
    console.log((error as Error).message);
  }
}

export default connectDatabase