import transactionModel from '../models/transactions.js'
import userModel from "../models/userSchema.js";
import { v4 as uuidv4 } from 'uuid';

export async function sendMoney(req,res,next){
    let sender,receiver;
    const {senderEmail,receiverEmail,amount}=req.body
    const transactionId=uuidv4();
    try {
        sender=await userModel.findOne({email:senderEmail})
        receiver=await userModel.findOne({email:receiverEmail})
        if((!sender)||(!receiver)||(receiver===sender)) res.status(200).json({LoggedIn:false})
    }
    catch (error) {
        console.log(error)
        res.status(400)
    }
    try {
        await transactionModel.create({accountId:sender.accountId,transactionId:transactionId,transactionDetail:{
            action: 'sent',
            email: receiverEmail,
            amount: amount,
            person: receiver.name 
        }}).then((res)=>{console.log(res)})
        await transactionModel.create({accountId:receiver.accountId,transactionId:transactionId,transactionDetail:{
            action: 'received',
            email: senderEmail,
            amount: amount,
            person: sender.name 
        }}).then((res)=>{console.log(res)})
        sender.balance-=amount
        sender.moneySent+=amount
        sender= await sender.save()
        console.log(receiver)
        receiver.balance+=amount
        receiver.moneyReceived+=amount
        await receiver.save().then((res)=>console.log(res)).catch((e)=>{
            console.log(e)
            res.status(404)
        })
        res.status(200).json({message:'transaction completed',transactionId:transactionId,balance:sender.balance,moneyReceived:sender.moneyReceived,moneySent:sender.moneySent})
    }
    catch (error) {
        console.log(error)
        res.status(400)
    }
    next()
}