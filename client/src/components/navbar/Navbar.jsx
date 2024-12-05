import React from 'react'
import './Navbar.css'

const Navbar = () => {

  const navLinks =[
    {
     text : "ABOUT" ,
     href : "/about",
     subLink : [{
         text:"OUR MISSION",
         href:"/our mission",
     },
     {
      text:"HOW IT WORKS",
      href:"/our mission",
  },
  {
    text:"OTHER SOURCE",
    href:"/our mission",
}]
  },
  {
    text : "ABOUT" ,
    href : "/about"
 },
 {
  text : "ABOUT" ,
  href : "/about"
}, {
  text : "ABOUT" ,
  href : "/about"
}, {
  text : "ABOUT" ,
  href : "/about"
}]
 
// const top = document.getElementById('topContainer')
// try {
//   top.addEventListener('mouseover',(e)=>{
//     e.preventDefault();
//     if(e.target.tagName != 'a') return;
//     top.style.color = "yellow"
//     e.target.style.color = 'red'
    
//   })
    
// } catch (error) {
//   console.log(error)
// }

  return (
   
     
      <div className='navbar'>

        <div className='fluid-container d-flex justify-content-center align-items-center logoContainer'>
               <img id="logo" src = {require('../../asset/material/guiness.jpeg')} alt="hello" />    
        </div> 
    
        <div className='d-flex flex-column navbarContainer'>
           <div id ='topContainer' className ='d-flex text-light justify-content-evenly align-items-center '>
              <a href="home"> ABOUT</a> 
              <a>CHALENGES</a> 
              <a>BADGES</a>   
              <a>VIDEOS</a> 
           </div>
           <div className ='d-flex text-dark justify-content-evenly align-items-center bottomContainer border'>
              <a>CHALENGES</a> 
              <a>BADGES</a>    
              <a>VIDEOS</a>  
           </div> 
        </div>
      </div>
  
  )
 

}

export default Navbar
