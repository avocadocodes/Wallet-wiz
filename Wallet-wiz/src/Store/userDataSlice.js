import { createSlice } from '@reduxjs/toolkit'
const initialState ={
    userStatus:{
        loggedIn:false,
        name:'',
        email:'',
        password:0,
        balance:0,
        moneyRecieved:0
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
        increaseBalance:(state,action)=>{
            state.balance=state.balance+action.payload.amount
            state.moneyRecieved=state.moneyRecieved+action.payload.amount
        },
        decreaseBalance:(state,action)=>{
            state.balance=state.balance-action.payload.amount
        }
    }
})
export default userStatusSlice.reducer
export const {setStatus,increaseBalance,decreaseBalance} = userStatusSlice.actions