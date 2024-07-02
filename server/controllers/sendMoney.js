import transactionModel from '../models/transactions.js'
import userModel from "../models/userSchema.js";

export async function sendMoney(req,res,next){
    let sender,reciever;
    const {senderEmail,recieverEmail,amount}=req.body
    try {
        sender=await userModel.findOne({email:senderEmail})
        reciever=await userModel.findOne({email:senderEmail})
        if((!sender)||(!reciever)) res.status(200).json({LoggedIn:false})
    }
    catch (error) {
        console.log(error)
        res.status(400)
    }
    try {
        await transactionModel.create({accountId:sender.accountId,transactionDetail:{
            action: 'sent',
            email: recieverEmail,
            amount: amount,
            person: reciever.name 
        }}).then((res)=>{console.log(res)})
        await transactionModel.create({accountId:reciever.accountId,transactionDetail:{
            action: 'recieved',
            email: senderEmail,
            amount: amount,
            person: sender.name 
        }}).then((res)=>{console.log(res)})
    }
    catch (error) {
        console.log(error)
    }
    res.status(200).json({message:'transaction completed'})
    next()
}