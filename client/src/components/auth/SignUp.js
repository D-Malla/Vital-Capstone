import React, { useState } from 'react'
import { register, login } from '../../actions/auth.actions'
import validator from 'validator'


export default props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    // if (!validator.isLength(username, {max:20})){
    //   setError(true)
    //   setErrorMessage('username cannot be longer than 20 characters')
    // } else {
    //   setError(false)
    //   setErrorMessage('')
    // }

    // if (!validator.equals(password, confirm)){
    //   setError(true)
    //   setErrorMessage('Password did not match')
    // } else {
    //   setError(false)
    //   setErrorMessage('')
    // }

    register(username, password, first_name, last_name)
    login(username, password)
    }


    return (
      <div className='signInFormContainer'>
        <form onSubmit={handleSubmit}>
          <h5>Sign In</h5>
          <div>
            <label htmlFor='username'>username</label>
            <input type='username' id='username' onChange={e =>{setUsername(e.target.value)}} value={username}/>
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={e =>{setPassword(e.target.value)}} value={password}/>
          </div>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' onChange={e =>{setFirst_name(e.target.value)}} value={first_name}/>
          </div>  <div>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' onChange={e =>{setLast_name(e.target.value)}} value={last_name}/>
          </div>
          <div>
            <button type='submit'>Register</button>
          </div>
        </form>
      </div>
    )
}
