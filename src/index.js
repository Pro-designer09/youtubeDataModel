import dotenv from 'dotenv'
import connectDB from './db/database.js';
import {app} from './app.js';

dotenv.config({
    path:'./env'
});


connectDB()
    .then(()=>{
        app.listen(process.env.PORT,()=>{
        console.log(`⚙️...Server is Running on port ${process.env.PORT}`) 
         });
    })

.catch((err)=>{
    console.log("Mongodb Connection Failed", err);
});












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


