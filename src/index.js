import dotenv from 'dotenv'
import express from 'express';
import connectDB from './db/database.js';

dotenv.config({
    path:'./env'
});


connectDB()












/*
;(async()=>{
    try{
        mongoose.connect (`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("error", error);
            throw err;
        });

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }catch(error){
        console.error("ERROR",error)
        throw err
    }
})() */


