import React, { Component } from 'react'
import { connect } from 'react-redux'


class Post extends Component {
  constructor () {
    super ()

    this.state = {
      post: {}
    }
  }
componentDidMount() {
  let { id } = this.props.match.params
  let post = this.props.post.find(post => +post.id === +id)
  this.setState({
    post: post
  })
}

  render () {
    console.log(this.state.post)
    return (
      <div>
       {/* { this.state.post && 
       <div> 
         <h1></h1>
         <p></p>

       } */}
      </div>
    )
  }
}

export default Post 