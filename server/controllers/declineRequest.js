import requestReceivedModel from "../models/requestReceived.js";
import requestSentModel from "../models/requestSent.js";
import userModel from "../models/userSchema.js";
import transactionModel from "../models/transactions.js";
export async function declineRequest(req,res,next){
    let sender,receiver
    const {requestId,senderEmail,receiverEmail}=req.body
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
        console.log(await requestReceivedModel.deleteOne({accountId:sender.accountId,requestReceivedId:requestId}))
    } catch (error) {
        console.log(error)
        res.status(400)
    }
    try {
        console.log(await requestSentModel.deleteOne({accountId:receiver.accountId,requestSentId:requestId}))
    } catch (error) {
        console.log(error)
        res.status(400)
    }

    res.status(200).json({message:"successfully deleted the request"})
}   