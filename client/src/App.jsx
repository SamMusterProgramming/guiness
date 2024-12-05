
import './App.css';
import Navbar from './components/navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
import Registration from './components/registration/Registration.jsx';
import  Home  from './pages/home/Home.jsx';
import { useContext, useEffect } from 'react';
import { AuthContent } from './components/Auth/AuthContent';
import {BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import SideBar from './components/sideBar/SideBar';

function App() {
  
  const {user} = useContext (AuthContent)

  console.log(user)
  return (
    
       <Router>
        <Routes>
         <Route  path = "/"  element = { user ? <Home/> : <Login/> } />  
         <Route path = "/login" element = { user ? < Navigate to = '/' /> : <Registration/> } />
        </Routes> 
       </Router>       
         
  );
  }

export default App;
