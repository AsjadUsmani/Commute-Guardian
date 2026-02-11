import express from "express"
import cors from 'cors';
import dotenv from "dotenv";
import routes from "./routes";
dotenv.config()

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT'],
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api', routes);

export default app;