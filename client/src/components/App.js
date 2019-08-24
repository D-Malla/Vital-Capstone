import React, {useState} from 'react'
import 'normalize.css/normalize.css'
import '../styles/Home.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store'

import Home from './Home/Home'
import Lessons from './LessonSelector/Lessons'
import Lesson from './LessonPage/Lesson'

export default props => {
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/lessons' component={Lessons} />
        <Route path='/lesson' component={Lesson} />
      </Router>
    </Provider>
  )
}