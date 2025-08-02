import mongoose from 'mongoose'
import dotenv from "dotenv"  //first install dotenv from the console window and then use dotenv file 
dotenv.config()

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() =>
            console.log('Database connected !!')
        )

}

