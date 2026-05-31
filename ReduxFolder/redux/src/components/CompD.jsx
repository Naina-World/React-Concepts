import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/features/counterSlice';

function CompD() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() =>dispatch(increment())}> Increment </button>
      {count}
    </div>
  )
}

export default CompD
