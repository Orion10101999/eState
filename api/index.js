import express from 'express';
import mpngoose from 'mongoose'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js' ;
import authRouter from './routes/auth.route.js' ;
dotenv.config();
const app = express()
app.use(express.json())

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


// API Route 

app.post('/',(req,resp)=>{
    console.log(req.body);
})

app.use('/api/user' , userRouter )
app.use('/api/auth' ,  authRouter )

app.use((err , req , resp ,next)=>{
    const statusCode = err.statusCode || 500 
    const message = err.message || 'Internal Server Error'
    return resp.status(statusCode).json({
        sucess : false,
        statusCode,
        message
    })
})