import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extednded:true}))
app.use(express.static("public"))
app.use(cookieParser())


app.listen(process.env.PORT || 3000, ()=>{
    console.log(`⚙️ Server is Running on port ${process.env.PORT}`)
})


export {app}