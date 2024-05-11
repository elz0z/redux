import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount } from './calcSlice'

export default function Calc() {
  const result = useSelector(state => state.calcReducer.result
  )
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="increment value by 100"
          onClick={() => dispatch(incrementByAmount(100))}
        >
          increment by 100
        </button>
        <span>{result}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Decrement value by 100"
          onClick={() => dispatch(decrementByAmount(100))}
        >
          decrement by 100
        </button>
      </div>
    </div>
  )
}