import userModel from "./models/userSchema.js";
export async function Login(req,res,next){
    const {email,password}=req.body
    try{
        const user=await userModel.findOne({email:email,password:password})
        if(user){
            console.log(user.accountId)
            res.status(200).json({name:user.name,balance:user.balance,moneyReceived:user.moneyReceived,moneySent:user.moneySent})
        }
        else {
            console.log('not found')
            res.status(400).json({message:'login unsuccessful'})
        }
    }
    catch(e){
        console.log(e)
        res.status(404)
    }
    next()
}