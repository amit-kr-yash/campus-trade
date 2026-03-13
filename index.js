import express from "express";
import connectDb from './src/config/db.js'
import userRouter from './src/routes/user.routes.js'
import eventRouter from "./src/routes/event.routes.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import dotenv from 'dotenv'
dotenv.config()


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()
const PORT = process.env.PORT;

app.use(express.json())
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use('/users',userRouter);
app.use("/event", eventRouter)

app.listen(PORT,async()=>{
    console.log(`Server started at PORT : ${PORT}`)
    connectDb(process.env.MONGO_URL);
})