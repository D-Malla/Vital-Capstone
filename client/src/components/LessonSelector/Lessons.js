import React from 'react'
import '../../styles/Lessons.css'

import LessonsHeader from './LessonsHeader'
import LessonsBody from './LessonsBody'
import LessonsFooter from './LessonsFooter'

export default props => {
  return (
    <div id='container'>
      <LessonsHeader />
      <LessonsBody />
      <LessonsFooter />
    </div>
  )
}