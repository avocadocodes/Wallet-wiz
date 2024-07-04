import express from 'express'
import cors from 'cors'
import {connectDb} from './connectDb.js'
import { Signup } from './signup.js'
import { Login } from './login.js'
import { sendMoney } from './controllers/sendMoney.js'
import { requestMoney } from './controllers/requestMoney.js'
import { getTransactions } from './controllers/getTransactions.js'
import { getRequests } from './controllers/getRequests.js'
import { acceptRequest } from './controllers/acceptRequest.js'
import { declineRequest } from './controllers/declineRequest.js'

const app=express()
app.use(express.json());
app.use(cors({
    origin:'*'
}))
app.post('/login',Login ,(req,res)=>{})
app.post('/signUp',Signup,(req,res)=>{})
app.post('/sendMoney',sendMoney,(req,res)=>{})
app.post('/requestMoney',requestMoney,(req,res)=>{})
app.post('/getTransactions',getTransactions,(req,res)=>{})
app.post('/getRequests',getRequests,(req,res)=>{})
app.post('/acceptRequest',acceptRequest,(req,res)=>{})
app.post('/declineRequest',declineRequest,(req,res)=>{})
app.listen (3000,async()=>{
    connectDb()
    console.log("on port 3000")
})