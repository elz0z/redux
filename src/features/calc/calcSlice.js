import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  result: 0,
}
export const calcSlice = createSlice({
  name: 'calcReducer',
  initialState,
  reducers: {
    increment: (state) => { state.result += 1 },
    decrement: (state) => { state.result -= 1 },
    incrementByAmount: (state, action) => {
      state.result += action.payload
    },
    decrementByAmount: (state, action) => {
      state.result -= action.payload
    },

  }
})
//ACTION CREATOR FOR ECH CASE REDUCER FUNCTION
export const { increment, decrement, incrementByAmount ,decrementByAmount} = calcSlice.actions;
export default calcSlice.reducer