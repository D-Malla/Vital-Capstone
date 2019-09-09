import store from '../store'
import axios from 'axios'

if (localStorage.getItem('token')) {
  setInterceptors(localStorage.getItem('token'))
}

function setInterceptors() {
  axios.interceptors.request.use(
    reqConfig => {
      reqConfig.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
      return reqConfig
    },
    err => Promise.reject(err),
  )
}


export function login(username,password) {
  axios.post('/api/login', 
  {
    username: username, 
    password: password
  }
  ).then(resp => {
    const token = resp.data.token

    localStorage.setItem('token', token)

    setInterceptors(token)        
    store.dispatch({
        type: 'LOGIN',
        payload: {
            username: username
        }
    })
    
  }).catch(e => {
      console.log('error',e)
  })
}

export function register( username, password,first_name,last_name) {
  console.log(username,password,first_name,last_name)
  axios.post('/api/register', {
    username: username, 
    password: password,
    first_name: first_name,
    last_name: last_name
  }).then(resp => {
  store.dispatch({
      type: 'REGISTER',
      payload: {
          username: username,
      }
      })  
  })
}

export function makePrivateCall() {
  axios.get('/api/foo').then (resp => {
    console.log(resp.data)
  })
}

export function logout() {
  localStorage.removeItem('token')
  
  store.dispatch({
      type: 'LOGOUT'
  })
}