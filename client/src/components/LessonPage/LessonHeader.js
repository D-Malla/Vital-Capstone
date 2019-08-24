import React from 'react'
import '../../styles/Lesson.css'

export default props => {
  return (
      <header  id='lessonHeaderContainer'>
        <div className='logoDiv'>
          <h1>Vital</h1>
        </div>
        <div className='catchphraseDiv'>
          <h1>Coding Made Simple!</h1>
        </div>
        <div className='userButtonDiv'>
          <button className='userButtons' type='button'>Student</button>
          <button className='userButtons' type='button'>Administrator</button>
        </div>
      </header>
  )
}