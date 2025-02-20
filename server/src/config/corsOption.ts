import { ENV } from "./env";


export const corsOption = {
    origin: ENV.CLIENT,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], 
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], 
    credentials: true 
}