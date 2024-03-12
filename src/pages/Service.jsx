import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Service = () => {
  const reduxvalue = useSelector((state) => state.countvalue.value)
  
  return (
    <div className='service'>
      <h2>My Service page count: {reduxvalue}</h2>
    </div>
  )
}

export default Service