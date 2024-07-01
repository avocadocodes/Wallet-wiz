// import {transactionModel} from '../models/transactions.js'
// import {userModel} from '../models/userSchema.js'
export async function sendMoney(req,res,next){
    let senderAccountId,recieverAccountId;
    const {senderEmail,recieverEmail,amount}=req.body
    console.log(recieverEmail)
    console.log(senderEmail)
    console.log('hi')
    // try {
    //     await userModel.findOne({email:req.senderEmail}).then((res)=>{
    //         senderAccountId=res.accountId
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
    res.json(200)
    next()
}