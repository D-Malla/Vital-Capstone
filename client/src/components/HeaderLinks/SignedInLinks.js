 import React from 'react'
 import { NavLink } from 'react-router-dom'

 export default props => {
   return (
    <ul className='signInList'>
      <li><NavLink to='/' id='progress'>Progress</NavLink></li>
      <li ><NavLink to='/' id='logout'>Log Out</NavLink></li>
      <li><NavLink to='/'> UserImg</NavLink></li>
    </ul>
   )
 }