import React, { useContext, useRef } from 'react'
import './Registration.css'
import { AuthContent } from '../Auth/AuthContent';
import { register } from '../apiCalls';
import { useNavigate } from 'react-router-dom';

const Registration = () => {

    const password = useRef();
     const username = useRef();
     const confirmpassword = useRef();
     const email = useRef();
    const {user,isFetching,error, dispatch} = useContext(AuthContent)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value)
        const registerUser = {
            username:username.current.value,
            email:email.current.value,
            password:password.current.value,
            confirmpassword:confirmpassword.current.value
        }  
        register(registerUser,dispatch).
        then(data => console.log(user));
     
    }

  return (
   
    <div className='container-fluid d-flex justify-content-center mt-5 align-items-center'>
        <div className='container-fluid gap-3 d-flex justify-content-center align-items-center  loginContainer'>
           
            <div className="container-fluid d-flex text-center  flex-column justify-content-center 
            gap-4 align-items-center loginRight"> 
                <img src= {require ("../../asset/material/guiness.jpeg")} alt="" />
                <h3 id="loginLogo">GUINESS AND TALENT</h3>
                <span className="logindescr">
                    LET THE WORLD DICSCOVER YOU TALENT 
                    EXIBIT YOUR SUPERWORD AND BREAK  GUINESS WORLD RECORD
                </span>
            </div>
 
            <form onSubmit= {handleSubmit}  className="container-fluid d-flex justify-content-center
                align-items-center gap-3 flex-column npm loginLeft">
                    <input type="text" required 
                    defaultValue='samirhaddadi5562' ref={username}
                    className="logininput"  />
                    <input type="email" required 
                    defaultValue='samdevweb2024@gmail.com' ref={email}
                    className="logininput"  />
                    <input type="password" minLength="6"
                    required defaultValue='samir2024' ref={password}
                    className="logininput"  />
                     <input  type="password" minLength="6"
                    required defaultValue='samir2024' ref={confirmpassword}
                    className="logininput"  />
                    <button  id="loginbutton" type="submit">REGISTER</button>
                    <span id='forget' className="loginforget">already have an account</span>
                    <button id="register">LOGIN</button>
            </form>
            
       </div>
    </div>
  )
}

export default Registration
