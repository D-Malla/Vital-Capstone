import React from 'react'
import Img from  '../../assets/Vital.png'

export default props => {
  return (
      <header  id='homeHeaderContainer'>
        <div className='logoDiv'>
          <img src={Img} alt='Vital Logo'/>
        </div>
        <div className='catchphraseDiv'>
          <h1>CODING MADE SIMPLE!</h1>
        </div>
        <div className='userButtonDiv'>
          <button className='userButtons' type='button'>Student</button>
          <button className='userButtons' type='button'>Administrator</button>
        </div>
      </header>
  )
}