import mongoose from 'mongoose'
const TransactionSchema=new mongoose.Schema(
    {
        accountId:{
            type:String,
            required:true
        },
        transactions:[
            {
                action:{
                    type:String,
                    required:true
                },
                email:{
                    type:String,
                    required:true
                },
                date:{
                    type:Date,
                    default:Date.now
                },
                amount:{
                    type:Number,
                    required:true
                },
                from:{
                    type:String,
                    required:true
                }
            }
        ]
    }
)
const transactionModel=mongoose.model('Transactions',TransactionSchema)