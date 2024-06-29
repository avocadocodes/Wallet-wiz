import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import {connectDb} from './connectDb.js'
import userModel from './models/userSchema.js'
const app=express()
app.use(cors({
    origin:'http://localhost:5173'
}))
app.post('/login',(req,res)=>{
    userModel.create({})
})
app.listen (3000,async()=>{
    connectDb()
    console.log("on port 3000")
})