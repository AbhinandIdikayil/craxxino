import {config} from 'dotenv'
config();

export const ENV = {
    PORT: process.env.PORT,
    CLIENT: process.env.CLIENT as string,
    MONGO_URI: process.env.MONGO_URI  as string
}