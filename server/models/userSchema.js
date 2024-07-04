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
            type:Number,
            default:10000
        },
        moneyReceived:{
            type:Number,
            default:0
        },
        moneySent:{
            type:Number,
            default:0
        }
    }
)
const userModel =mongoose.model('users',userSchema)
export default userModel