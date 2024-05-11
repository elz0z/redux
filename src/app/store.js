
import { configureStore } from '@reduxjs/toolkit'
import calcReducer from '../features/calc/calcSlice'
/*
KEY OFTEN MATCH WITH SLICE NAME  BUT DOESN'T HAVE TO,
BUT THIS KEY IS WHAT YOU'LL USE IN YOUR APP NOT SLICE NAME
*/
export const store = configureStore({
  reducer: {
    calcReducer,
  },
})