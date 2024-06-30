import userModel from "./models/userSchema.js";
export async function Login(req,res,next){
    const {email,password}=req.body
    try{
        const user=await userModel.findOne({email:email,password:password})
        if(user){
            console.log(user.accountId)
        }
        else {
            console.log('not found')
        }
    }
    catch(e){
        console.log(e)
    }
    res.status(200).json({status:true})
}