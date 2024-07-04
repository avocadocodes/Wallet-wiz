import userModel from "./models/userSchema.js"
import { v4 as uuidv4 } from 'uuid';
export async function Signup (req,res,next){
    const {name,email,password} =req.body
    const accountId=uuidv4();
    console.log(accountId)
    try {
        if(await userModel.findOne({email:email})!=null)res.status(404).json({message:'already registered'})
    } catch (error) {
        res.status(404)
    }
    try{
        const user =await userModel.create({name:name,email:email,password:password,accountId:accountId,balance:10000,moneyReceived:0})
        console.log(user)
    }
    catch(e){
        console.log(e)
        res.status(404)
    }
    res.status(200).json({message:'successfully logged in '})
    next()
}