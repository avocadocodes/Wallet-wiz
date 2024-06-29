import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app=express()


app.listen(3000,()=>{
    console.log("on port 3000")
    mongoose.connect()
})