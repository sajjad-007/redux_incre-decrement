import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from '../slices/counterSlice'

const Home = () => {
  const reduxvalue = useSelector((state) => state.countvalue.value)
  
  let [count,setCount] = useState(reduxvalue)
  const dispatch = useDispatch()
  // console.log(reduxvalue);
  
  let HandleIncrement = () =>{
    count++
    setCount(count)
    dispatch(increment(count))
  } 
  let HandleDecrement = () => {
    count--
    setCount(count)
    dispatch(decrement(count))
  }
  return (
    <div className='home'>
      <h1>Increment & Decrement (Home page)</h1>
      <div>
        <button onClick={HandleIncrement}>Increment</button>
        <h3>{count}</h3>
        <button onClick={HandleDecrement}>Decrement</button>
      </div>
    </div>
  )
}

export default Home