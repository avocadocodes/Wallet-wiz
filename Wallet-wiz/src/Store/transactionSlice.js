import { createSlice } from '@reduxjs/toolkit'
const initialState={
    transactions:[]
}
export const transactionSlice=createSlice({
    name:'transactions',
    initialState,
    reducers:{
        push:(state,action)=>{
            if(state.transactions.length()==10)state.transactions.shift()
            state.transactions.push({
                email:action.payload.email,
                name:action.payload.name,
                amount:action.payload.amount,
                type:action.payload.type,
                date:action.payload.date
            })
        }
    }
})
export default transactionSlice.reducer
export const {push} =transactionSlice.actions