import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../ducks/reducers/posts'

class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
      search: '', 
      userposts: true
    }
  }

componentDidMount() {
  this.props.getPosts()
}
  
  render () {
    return (
      <div>
      
          <input type='text' placeholder="Search By Title"/>
            <button>Reset</button>
          <input type='submit' value='x'/>

        <p>Title:</p>
          <input />
       <p>Image URL:</p>
          <input />
       <p>Content:</p>
          <input />
      </div>
    )
  }
}


export default connect(null, { getPosts })(Dashboard) 