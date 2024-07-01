import { configureStore } from '@reduxjs/toolkit'
import userDataSlice from './userDataSlice'
import transactionSlice from './transactionSlice'
export const store = configureStore({
  reducer: {
    userStatus:userDataSlice,
    transactions:transactionSlice
  },
})