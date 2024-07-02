import userModel from "../models/userSchema"
import requestReceivedModel from "../models/requestReceived"
export async function getRequests(req,res,next){
    const {email}=req.body
    try {
        const accountId=userModel.findOne({email:email}).accountId
        if(accountId){
            const list =requestReceivedModel.find({accountId}).sort({date:-1}).limit(10)
            console.log(list)
            res.status(200).json({list:list})
        }
        res.status(400)
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}