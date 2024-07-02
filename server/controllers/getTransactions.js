import userModel from "../models/userSchema"
import transactionModel from "../models/transactions"
export async function getTransactions(req,res,next){
    const {email}=req.body
    try {
        const accountId=userModel.findOne({email:email}).accountId
        if(accountId){
            const list =transactionModel.find({accountId}).sort({date:-1}).limit(10)
            console.log(list)
            res.status(200).json({list:'sent'})
        }
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}