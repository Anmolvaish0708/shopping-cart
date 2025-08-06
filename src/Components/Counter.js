import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../redux/CounterSlice';

const Counter = () => {

    const count = useSelector( (state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <button onClick={ () => dispatch(increment())}>
            Increment
        </button>
         <br/>
         <br/>
         <div>{count}</div>
         <br/>
         <br/>
        <button onClick={() => dispatch(decrement())}>
            Decrement
        </button>
    </div>
  )
}

export default Counter