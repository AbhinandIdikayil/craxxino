import mongoose from 'mongoose'
import { ENV } from './env'

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI);
        console.log('DB connected succesfully');
    } catch (error) {
        process.exit(1)
    }
}