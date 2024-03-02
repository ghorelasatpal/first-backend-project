// require('dotenv').config({path: './env'})
import dotenv from "dotenv";

dotenv.config();
import connectDB from "./db/index.js";

connectDB();

/*
import express from "express";
const app  = express()

(async()=>{
    try{
        await Mongoose.connect(`${process.evn.MONGODB_URI}/${DB_NAME}`)
        app.on("error app",(error)=>{
            console.log("errror: ",error);
            throw error
        })

        app.listen(process.evn.PORT,()=>{
            console.log(`app is listening on port ${process.evn.PORT}`);
        })
    
    }catch(error){
        console.error("ERROR: ",error)
        throw error
    }
})
*/
