import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div className='navmaindiv'>
        <div className="navlinkdiv">
          <Link to="/Login">Login</Link>
          {/* <Link to="Register"><Register/></Link> */}
        </div>
    </div>
  )
}

export default Nav