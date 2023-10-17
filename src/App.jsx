import React from 'react'
import Login from './pages/Login'
import Nav from './pages/Nav'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import "./Global.css"

const App = () => {
  return (
    <div id='appmain'>
          <div className="approutediv">
          <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path="/Login/Register" element={<Register/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
          </Routes>
          </BrowserRouter>
        </div>
    </div>
  )
}

export default App