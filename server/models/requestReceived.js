import mongoose from 'mongoose'
const RequestReceiverSchema=new mongoose.Schema(
    {
        accountId:{
            type:String,
            required:true
        },
        requestReceivedId:{
            type:String,
            required:true
        },
        requestReceivedDetail:{
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
const requestReceivedModel=mongoose.model('requestsReceived',RequestReceiverSchema)
export default requestReceivedModel