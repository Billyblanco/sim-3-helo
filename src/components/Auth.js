import React, { Component } from 'react'

class Auth extends Component {
  constructor () {
    super ()

    this.state = {
      username: '',
      password: ''
    }
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
          <input placeholder='username' 
                  onChange={this.handleUsername}/>

          <input placeholder='password'
                 onChange={this.handlePassword}/>
        <button >LOGIN</button>
        <button>REGISTER</button>
      </div>
    )
  }
}
export default Auth 