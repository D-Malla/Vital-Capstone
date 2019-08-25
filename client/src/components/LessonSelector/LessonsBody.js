import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  return (
    <div id='lessonsBodyContainer'>
      <div className='lessonsBody'>
          <ul>
            <li><Link to='/lesson'>Blah</Link></li>
            <li><Link to='/lesson'>Blah</Link></li>
            <li><Link to='/lesson'>Blah</Link></li>
            <li><Link to='/lesson'>Blah</Link></li>
            <li><Link to='/lesson'>Blah</Link></li>
            <li><Link to='/lesson'>Blah</Link></li>
          </ul>
      </div>
    </div>
  )
}