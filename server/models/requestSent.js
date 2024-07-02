import mongoose from 'mongoose'
const RequestSentSchema=new mongoose.Schema(
    {
        accountId:{
            type:String,
            required:true
        },
        requestSentId:{
            type:String,
            required:true
        },
        requestSentDetail:{
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
const requestSentModel=mongoose.model('requestsSent',RequestSentSchema)
export default requestSentModel