import React from 'react'
import { Link } from 'react-router-dom'

function Nav (props) {
  return (
    <div>
      <Link to='/dashboard'>HOME</Link>
      <Link to='/new'>NEW POST</Link>
      <Link to='/'>LOGOUT</Link>
    </div>
  )
}
export default Nav