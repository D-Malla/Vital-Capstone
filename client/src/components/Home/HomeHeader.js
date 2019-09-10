import React from 'react'
import Img from  '../../assets/Vital.png'
import SignedInLinks from '../HeaderLinks/SignedInLinks'
import SignedOutLinks from '../HeaderLinks/SignedOutLinks'


export default (props, {message}) => {
  return (
      <header  id='homeHeaderContainer'>
        <div className='logoDiv'>
          <img src={Img} alt='Vital Logo'/>
        </div>
        <div className='catchphraseDiv'>
          <h1>CODING MADE SIMPLE!</h1>
        </div>
      </header>
  )
}