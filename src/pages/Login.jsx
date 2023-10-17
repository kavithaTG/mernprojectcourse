import React from 'react'
import Register from './Register'
import {Link} from "react-router-dom"
import "../Global.css"


const Login = () => {
  return (
    <div id="logmaindiv">
        <div id='logformdiv'>
          <center className='center'>
            <h1>Login</h1>
          <div className='formdiv'>
            <form className='formdiv' action="">
              <div className='txt'>
                <label htmlFor="f_email">Email:</label>
                <input type="email" name='email' /></div>
                <div className="txt">
                <label htmlFor="f_password">Password:</label>
                <input type="password" name='password' /></div>
                <button className='submit'>submit</button>
                <button className='cancel'>cancel</button><br />
                Do you want to Register?<Link to="Register"><a href={<Register/>}>Register</a></Link>
            </form>
            </div>
            </center>
        </div>
      
    </div>
  )
}

export default Login