import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const About = () => {
  const reduxvalue = useSelector((state) => state.countvalue.value)
  
  return (
    <div className='about'>
      <h2>About page count : {reduxvalue}</h2>
    </div>
  )
}

export default About