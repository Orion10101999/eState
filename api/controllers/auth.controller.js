import { errorHandler } from '../../../mern-estate-main/mern-estate-main/api/utils/error.js';
import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
export const signUp = async (req ,resp ,next ) =>{
    const {username , email , password} = req.body ;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username , email , password : hashedPassword})
    try {
        await newUser.save()
        resp.status(201).json("User Created Sucessfully")
    } catch (error) {
        next(error)
    }
}
export const signIn = async (req ,resp ,next ) =>{
    const {email , password} = req.body ;
    
    try {
        const validUser = await User.findOne({email})
        if(!validUser) return next(errorHandler(400,'User Not Found!'))
        const validPassword = bcryptjs.compareSync(password ,validUser.password)
        if(!validPassword) return next(errorHandler(400,'Wrong Credentials!'))
        resp.status(202).json("correct password",validUser._doc)
    } catch (error) {
        next(error)
    }
}


