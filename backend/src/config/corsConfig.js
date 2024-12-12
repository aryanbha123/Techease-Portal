import dotenv from 'dotenv'
dotenv.config();
const allowedOrigins = process.env.CORS_ORIGIN;

const corsConfig = {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials:true
}
export default corsConfig;



