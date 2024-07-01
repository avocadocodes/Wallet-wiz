import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config();

export async function connectDb() {
    await mongoose.connect(process.env.MONGO_CDN_URL)
        .then(() => {
            console.log('connected to database');
        })
        .catch(error => {
            console.log('coudnt connect to database')
            console.log(error);
        });
}
