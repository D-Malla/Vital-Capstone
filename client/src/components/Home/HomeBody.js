import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  return (
    <div id='homeBodyContainer'>
      <div className='homeImage'></div>
      <div className='imgOverlay'></div>
      <div className='classSelectorDiv'>
        <div className='classSelector'><Link to="/lessons/html"><h3>HTML</h3></Link></div>

        <div className='classSelector'><h3>CSS</h3></div>
        <div className='classSelector'><h3>JAVASCRIPT</h3></div>
      </div>
    </div>
  )
}

