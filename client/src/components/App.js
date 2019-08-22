import React, {useState} from 'react'
import 'normalize.css/normalize.css'
import '../styles/Home.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store'

import Home from './Home/Home'

export default props => {
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <Provider store={store}>
      <Router>
        <Route path='/' component={Home} />
      </Router>
    </Provider>
  )
}