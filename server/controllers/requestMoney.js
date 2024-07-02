import requestReceivedModel from "../models/requestReceived.js";
import requestSentModel from "../models/requestSent.js";
import userModel from "../models/userSchema.js";
import { v4 as uuidv4 } from 'uuid';

export async function requestMoney(req,res,next){
    let sender,receiver;
    const {senderEmail,receiverEmail,amount}=req.body
    const requestId=uuidv4();
    console.log(receiverEmail)
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
        await requestSentModel.create({accountId:sender.accountId,requestSentId:requestId,requestSentDetail:{
            action: 'requestSent',
            email: receiverEmail,
            amount: amount,
            person: receiver.name 
        }}).then((res)=>{console.log(res)})
        await requestReceivedModel.create({accountId:receiver.accountId,requestReceivedId:requestId,requestReceivedDetail:{
            action: 'requestReceived',
            email: senderEmail,
            amount: amount,
            person: sender.name 
        }}).then((res)=>{console.log(res)})
        res.status(200).json({message:'request completed',requestSentId:requestId})
    }
    catch (error) {
        console.log(error)
        res.status(400)
    }
    next()
}