import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  return (
    <div id='lessonBodyContainer'>
      <aside className='lessonAside'>
        <ul>
          <li><Link to='/lesson'>Blah</Link></li>
          <li><Link to='/lesson'>Blah</Link></li>
          <li><Link to='/lesson'>Blah</Link></li>
          <li><Link to='/lesson'>Blah</Link></li>      
        </ul>
      </aside>
      <div className='lessonBody'>
        <article>
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
        </article>
        <div>
          <button type='button'>PREV</button>
          <button type='button'>CONTINUE</button>
        </div>
      </div>
    </div>
  )
}