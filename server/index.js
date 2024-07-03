import express from 'express'
import cors from 'cors'
import {connectDb} from './connectDb.js'
import { Signup } from './signup.js'
import { Login } from './login.js'
import { sendMoney } from './controllers/sendMoney.js'
import { requestMoney } from './controllers/requestMoney.js'
import { getTransactions } from './controllers/getTransactions.js'
import { getRequests } from './controllers/getRequests.js'

const app=express()
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
}))
app.post('/login',Login ,(req,res)=>{})
app.post('/signUp',Signup,(req,res)=>{})
app.post('/sendMoney',sendMoney,(req,res)=>{})
app.post('/requestMoney',requestMoney,(req,res)=>{})
app.post('/getTransactions',getTransactions,(req,res)=>{})
app.post('/getRequests',getRequests,(req,res)=>{})
app.listen (3000,async()=>{
    connectDb()
    console.log("on port 3000")
})