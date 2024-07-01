import {transactionModel} from '../models/transactions'
import {userModel} from '../models/userSchema'
export async function SendMoney(req,res,next){
    let senderAccountId,recieverAccountId;
    try {
        await userModel.findOne({email:req.senderEmail}).then((res)=>{
            senderAccountId=res.accountId
        })
    } catch (error) {
        console.log(error)
    }
    res.json(200)
}