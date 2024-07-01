import transactionModel from '../models/transactions.js'
import userModel from "../models/userSchema.js";

export async function sendMoney(req,res,next){
    let senderAccountId,recieverAccountId;
    const {senderEmail,recieverEmail,amount}=req.body
    try {
        const sender=await userModel.findOne({email:senderEmail})
        const reciever=await userModel.findOne({email:senderEmail})
        if(sender){
            senderAccountId=sender.accountId
            recieverAccountId=reciever.accountId
            console.log(senderAccountId)
            console.log(recieverAccountId)
        }
        else res.status(200).json({LoggedIn:false})
    } catch (error) {
        console.log(error)
        res.status(400)
    }
    try {
        await transactionModel.create({})
    } catch (error) {
        console.log(error)
    }
    next()
}