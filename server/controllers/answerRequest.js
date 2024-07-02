import requestReceivedModel from "../models/requestReceived";
import requestSentModel from "../models/requestSent";
import userModel from "../models/userSchema";
export async function answerRequest(req,res,next){
    let sender,receiver
    const {requestId,senderEmail,receiverEmail,amount,}=req.body
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
        // requestReceivedModel.delete({accountId})
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}   