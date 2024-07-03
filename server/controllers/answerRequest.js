import requestReceivedModel from "../models/requestReceived.js";
import requestSentModel from "../models/requestSent.js";
import userModel from "../models/userSchema.js";
import transactionModel from "../models/transactions.js";
export async function answerRequest(req,res,next){
    let sender,receiver
    const {requestId,senderEmail,receiverEmail,amount}=req.body
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
        await requestReceivedModel.deleteOne({accountId:sender.accountId,requestReceivedId:requestId})
    } catch (error) {
        console.log(error)
        res.status(400)
    }
    try {
        await requestSentModel.deleteOne({accountId:receiver.accountId,requestSentId:requestId})
    } catch (error) {
        console.log(error)
        res.status(400)
    }
    try {
        await transactionModel.create({accountId:sender.accountId,transactionId:requestId,transactionDetail:{
            action: 'sent',
            email: receiverEmail,
            amount: amount,
            person: receiver.name 
        }}).then((res)=>{console.log(res)})
        await transactionModel.create({accountId:receiver.accountId,transactionId:requestId,transactionDetail:{
            action: 'recieved',
            email: senderEmail,
            amount: amount,
            person: sender.name 
        }}).then((res)=>{console.log(res)})
        sender.balance-=amount
        sender.moneySent+=amount
        sender=await sender.save()
        console.log(sender)
        receiver.balance+=amount
        receiver.moneyRecieved+=amount
        await receiver.save().then((res)=>console.log(res)).catch((e)=>console.log(e))
        res.status(200).json({message:'transaction completed',transactionId:requestId,balance:sender.balance,moneyReceived:sender.moneyRecieved,moneySent:sender.moneySent})
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}   