import mongoose from "mongoose";
const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        } ,
        email:{
            type:String,
            required:true,
            unique:true
        },
        accountId:{
            type:String,
            required:true
        },
        balance:{
            type:Number
        },
        moneyRecieved:{
            type:Number
        }
    }
)
const userModel =mongoose.model('users',userSchema)
export default userModel