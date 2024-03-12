import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../layout/layout.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <NavLink to={"/"}>home</NavLink>
            <NavLink to={"/about"}>about</NavLink>
            <NavLink to={"/service"}>service</NavLink>
            
        </ul>
    </div>
  )
}

export default Navbar