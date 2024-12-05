import React, { useContext, useEffect, useRef } from 'react'
import './Login.css'
import { AuthContent } from '../Auth/AuthContent';
import { authUser } from '../apiCalls';
import { Link } from 'react-router-dom';
import  {useNavigate}  from 'react-router-dom';

const Login = () => {

    const email = useRef();
    const password = useRef();
    const {user,isFetching,error, dispatch} = useContext(AuthContent)
    
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
      console.log("i am here")
       e.preventDefault();
       authUser({email:email.current.value, password:password.current.value},dispatch)   
       navigate('/')   
    }
    
  
  // useEffect(() => {
  //   navigate('/')
  // }, [user]);

  return (
     <div className='container-fluid d-flex justify-content-center  align-items-center'>
        <div className='d-flex justify-content-center align-items-center  loginContainer'>
            <div className="container-fluid d-flex text-center flex-column justify-content-center 
                gap-5 align-items-center loginRight">
                <img src= {require ("../../asset/material/guiness.jpeg")} alt="" />
                <h3 id="loginLogo">GUINESS AND TALENT</h3>
                <span className="logindescr">
                    LET THE WORLD DICSCOVER YOU TALENT 
                    EXIBIT YOUR SUPERWORD AND BREAK  GUINESS WORLD RECORD
                </span>
             </div>
 
             <form onSubmit={handleSubmit}  className="container-fluid d-flex justify-content-center
                align-items-center gap-5 flex-column npm loginLeft">
                    <input type="email" required 
                    defaultValue='samcoeur2013@gmail.com' ref={email}
                    className="logininput"  />
                    <input type="password" minLength="6"
                    required defaultValue='samir2024' ref={password}
                    className="logininput"  />
                    <button  id="loginbutton" type="submit">Log In</button>
                    <span id='forget' className="loginforget">Forgot Password</span>
                    <button id="register">Create an account</button>
             </form>
            
       </div>
    </div>
    
  )
}

export default Login
