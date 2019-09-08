import React, { useEffect, useState } from 'react'
import { login } from '../../actions/auth.actions'
import { Redirect } from 'react-router-dom'


export default props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

    function handleSubmit(e){
      e.preventDefault()
        login(username, password)
       if ( localStorage.getItem('token')) { setLoggedIn(!loggedIn)}
    }

  return (
    // loggedIn ? <Redirect to="/" /> : (
      <div className='signInFormContainer'>
        <form onSubmit={handleSubmit}>
          <h5>Login</h5>
          <div>
            <label htmlFor='username'>username</label>
            <input type='username' id='username' onChange={e =>{setUsername(e.target.value)}} value={username}/>
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={e =>{setPassword(e.target.value)}} value={password} />
          </div>
          <div>
            <button className='cancelButton'>Cancel</button>
            <button className='loginButton'>Login</button>
          </div>
        </form>
      </div>
    )
  // )
}
