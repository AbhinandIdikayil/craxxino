import express from 'express'
import { ENV } from './config/env';
const app = express();
import cors from 'cors'
import { corsOption } from './config/corsOption';
import { router } from './routes/route';
import { connectDB } from './config/dbConnection';
import { errorHandler } from './middlewares/errorMiddleware';

app.use(cors(corsOption))
app.use(express.json());


app.use('/api', router)

app.use(errorHandler);

app.listen(ENV.PORT, async () => {
    await connectDB()
    console.log('Server is running on port', ENV.PORT)
})