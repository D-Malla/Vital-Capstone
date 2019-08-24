import React from 'react'

export default props => {
  return (
    <div id='homeBodyContainer'>
      <div className='homeImage'></div>
      <div className='imgOverlay'></div>
      <div className='greeting'><h1>WELCOME!</h1></div>
      <div className='classSelectorDiv'>
        <div className='classSelector'>
            <h3>HTML</h3>
          <p>THE BASIC STRUCTURE OF A WEBPAGE</p>
      </div>
        <div className='classSelector'>
            <h3>CSS</h3>
          <p>THE PRESENTATION, FORMATTING, AND LAYOUT</p>
      </div>
        <div className='classSelector'>
            <h3>JAVASCRIPT</h3>
          <p>THE FUNCTIONALITY AND CONTROL OF ELEMENTS</p>
      </div>
      </div>
    </div>
  )
}