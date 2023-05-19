import express from "express";
import * as dotenv from 'dotenv';
import cors from "cors";
import connectDB from "./config/connect.js";
// import postRoutes from "./routes/postRoutes.js";
import dalle from "./routes/dalle.js";

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use('/api/v1/dalle',dalle);

app.get("/",async(req,res)=>{
    res.send("Hello guys");
})
const startServer=async()=>{
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080,()=>console.log("server started"))
    }catch(e){
        console.log(e);
    }
   
}
startServer();