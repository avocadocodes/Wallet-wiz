import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import {connectDb} from './connectDb.js'
import userModel from './models/userSchema.js'
import { Signup } from './signup.js'
import { Login } from './login.js'
const app=express()
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
}))
app.post('/login',Login ,(req,res)=>{})
app.post('/signUp',Signup,(req,res)=>{})
app.listen (3000,async()=>{
    connectDb()
    console.log("on port 3000")
})