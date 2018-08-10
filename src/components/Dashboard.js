import React, { Component } from 'react'
import { connect } from 'react-redux'


class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
      search: '', 
      userposts: true
    }
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

let mapStateToProps = state => {
  return {
   
  }
}
export default connect(mapStateToProps)(Dashboard) 