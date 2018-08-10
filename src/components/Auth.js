import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Auth extends Component {
  constructor () {
    super ()

    this.state = {
      username: '',
      password: ''
    }
  }

  registerUser = () => {
    const { username, password } = this.state
    const newUser = { username, password }
    axios.post('/api/auth/register', newUser).then(results => {
      this.setState({
    
        username: results.data,
        password: results.data
      })
    })
  }
  

handlePassword = (e) => {
  this.setState({
    password: e.target.value
  })
}

handleUsername = (e) => {
  this.setState({
    username: e.target.value
  })
}


  render () {
    return (
      <div>
        <p>Username:</p>
          <input  key="Username" 
                  placeholder='username' 
                  onChange={this.handleUsername}/>
        <p>password:</p>
          <input  
                  placeholder='password'
                  onChange={this.handlePassword}/>
        <button >LOGIN</button>
        <button onClick={ () => {this.registerUser()}}>REGISTER</button>
      </div>
    )
  }
}
export default Auth 