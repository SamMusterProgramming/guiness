import React, { useRef } from 'react'
import './SideBar.css'

const SideBar = () => {
   
   
  return (
    <div className='container st'>
    <div  className="sidebar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </div>
    <div id="content" className="content">
        <button id="sidebarToggle">&#9776; Open Sidebar</button>
        <div className="container mt-5">
            <h1>Welcome to My Website</h1>
            <p>This is an example of a sliding sidebar menu using HTML, CSS, and Bootstrap.</p>
        </div>
    </div>
   </div>
 
  )
}

export default SideBar
