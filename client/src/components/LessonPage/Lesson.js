import React from 'react'
import '../../styles/Lesson.css'

import LessonHeader from './LessonHeader'
import LessonBody from './LessonBody'
import LessonFooter from './LessonFooter'

export default props => {
  return (
    <div id='container'>
      <LessonHeader />
      <LessonBody />
      <LessonFooter />
    </div>
  )
}