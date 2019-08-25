import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  return (
    <div id='homeBodyContainer'>
      <div className='homeImage'></div>
      <div className='imgOverlay'></div>
      <div className='greeting'><h1>WELCOME!</h1></div>
      <div className='classSelectorDiv'>
        <div className='classSelector'>
          <Link to='/lessons' className='link'>
            <h3>HTML</h3>
            <p>THE BASIC STRUCTURE OF A WEBPAGE</p>
          </Link>
        </div>
        <div className='classSelector'>
          <Link to='/lessons' className='link'>
            <h3>CSS</h3>
            <p>THE PRESENTATION, FORMATTING, AND LAYOUT</p>
          </Link>
        </div>
        <div className='classSelector'>
          <Link to='/lessons' className='link'>
            <h3>JAVASCRIPT</h3>
            <p>THE FUNCTIONALITY AND CONTROL OF ELEMENTS</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

