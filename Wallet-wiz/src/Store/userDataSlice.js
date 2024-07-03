import { createSlice } from '@reduxjs/toolkit'
const initialState ={
    userStatus:{
        loggedIn:false,
        name:'',
        email:'',
        password:0,
        balance:10000,
        moneySent:0,
        moneyReceived:0
    }
}
export const userStatusSlice= createSlice({
    name: 'userStatus',
    initialState,
    reducers:{
        setStatus:(state,action)=>{
            state.userStatus.name=action.payload.name
            state.userStatus.email=action.payload.email
            state.userStatus.password=action.payload.password
            state.userStatus.loggedIn=action.payload.loggedIn
        },
        sendMoney:(state,action)=>{
            state.userStatus.balance=action.payload.balance
            state.userStatus.moneyReceived=action.payload.moneyReceived
            state.userStatus.moneySent=action.payload.moneySent
        }
    }
})
export default userStatusSlice.reducer
export const {setStatus,sendMoney} = userStatusSlice.actions