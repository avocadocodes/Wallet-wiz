import express from 'express'
import mongoose from 'mongoose'
import {connectDb} from './connectDb.js'
const app=express()
app.listen (3000,async()=>{
    connectDb()
    console.log("on port 3000")
})