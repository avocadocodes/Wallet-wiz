import mongoose from 'mongoose'
const TransactionSchema=new mongoose.Schema(
    {
        accountId:{
            type:String,
            required:true
        },
        transactionDetail:{
                action:{
                    type:String,
                    required:true
                },
                email:{
                    type:String,
                    required:true
                },
                amount:{
                    type:Number,
                    required:true
                },
                person:{
                    type:String,
                    required:true
                }
            },
        date:{
            type:Date,
            default:Date.now
        }
    }
)
const transactionModel=mongoose.model('Transactions',TransactionSchema)
export default transactionModel