
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Names from "./components/Names"
import UserDetails from "./components/UserDetails"

import './App.css';

import React from 'react'

const App = () => {
  return (
    <div className='bg-container'>
     <Navbar/>
      <div className="flex-column-container">
      <Header/>
      <Names/>
      <div className="content-flex-row-container">
         <UserDetails/>
      </div>
      </div>

     
    </div>
  )
}

export default App