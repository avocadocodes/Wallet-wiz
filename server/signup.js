import userModel from "./models/userSchema.js"
import { v4 as uuidv4 } from 'uuid';
export async function Signup (req,res,next){
    const {name,email,password} =req.body
    const accountId=uuidv4();
    console.log(accountId)
    try{
        const user =await userModel.create({name:name,email:email,password:password,accountId:accountId,balance:10000,moneyRecieved:0})
        console.log(user)
    }
    catch(e){
        console.log(e)
    }
    res.status(200).json({message:'successfully logged in '})
    next()
}