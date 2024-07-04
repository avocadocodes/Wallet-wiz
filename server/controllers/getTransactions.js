import userModel from "../models/userSchema.js"
import transactionModel from "../models/transactions.js"
export async function getTransactions(req,res,next){
    const {email}=req.body
    try {
        const user=await userModel.findOne({email:email})
        if(user.accountId){
            console.log(user.accountId)
            const list =await transactionModel.find({accountId:user.accountId}).sort({date:-1}).limit(10)
            const sanitizedList = JSON.parse(JSON.stringify(list));
            res.status(200).json({list:sanitizedList,balance:user.balance,moneySent:user.moneySent,moneyReceived:user.moneyReceived})
        }
    } catch (error) {
        console.log(error)
        res.status(404)
    }
    next()
}