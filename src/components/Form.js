
import React, { Component } from 'react'
import { connect } from 'react-redux'


class Form extends Component {
  constructor () {
    super ()

    this.state = {
      post: {}
    }
  }
componentDidMount() {
  let { author_id } = this.props.match.params
  let post = this.props.post.find(post => +post.author_id === +author_id)
  this.setState({
    post: post
  })
}

  render () {
    // console.log(this.state.post)
    return (
      <div>
      <input />
      <input />
      <input />


       { this.state.post && 
       <div> 
         <h1>{this.state.post.title}</h1>
         <p>{this.state.post.image}</p>
         <p>{this.state.post.author_id}</p>
         <hr />
         <p>{this.state.post.content}</p>
        </div>
       }
      </div>
    )
  }
}
let mapStateToProps = state => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps)(Form)