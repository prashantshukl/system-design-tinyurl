import express from 'express';
import cors from 'cors';
import { connectDB } from './config/connectDb.js';
import dotenv from 'dotenv';
import UrlRouter from './routes/urlRoute.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(cors());


connectDB();

app.use("/tiny", UrlRouter);

app.use('/', (req, res) => res.send("server is live again !!"));

app.listen(3004, ()=> {
   console.log("Server is Running");
})