import React from 'react'
import './Home.css'
import ChallengePost from '../../components/challengePosts/ChallengePost'
import Navbar from '../../components/navbar/Navbar'
import Timeline from '../../components/timeline/Timeline'
import SideBar from '../../components/sideBar/SideBar'
const Home = () => {
  return (
    

      <div><Navbar/>
      <div className='row mt-4'>
          <div className='col-3 container'>
           {/* <SideBar/> */}
          </div> 

          <div className='col-lg-5 container-fluid d-flex flex-column align-items-center 
          justify-content-center'>
                
             <Timeline/>
  
          </div>
          <div className="col-lg-3">

          </div>

      </div>
      </div>
  )
}

export default Home
