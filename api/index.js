import express from 'express';
import mpngoose from 'mongoose'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const app = express()

mongoose.connect(process.env.MONGO)

.then((resp)=>{
    console.log(`MongoDB Connected SucessFully ${resp.connection.host}`);
    app.listen(process.env.PORT,()=>{
        console.log(`app.listen on server ${process.env.PORT}`);
    })

})
.catch((error)=>{
    console.log(`mongo DB Connction Failed ${error}`);
})

