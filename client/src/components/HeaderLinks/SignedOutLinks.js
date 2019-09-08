import React from 'react'
import { NavLink } from 'react-router-dom'

export default (props, {title, message}) => {
  return (
   <ul className='signOutList'> 
     <li><NavLink to='/signup'>SignUp</NavLink></li>
     <li><NavLink to='/signin'>Login</NavLink></li>
   </ul>
  )
}