import React, { useContext } from 'react'
import './ChallengePost.css'
import { AuthContent } from '../Auth/AuthContent'


const ChallengePost = ({post} ) => {
  
     
  const {user} = useContext(AuthContent)
 
  return (
   
   
        <div className="post-container mt-4">
            <div className="post-header">
                <img id='imgProfile' src = {require(`../../asset/images/${post.link}`)} alt="User Avatar"/>
                <div>
                    <div className="user-name">{user.name}</div>
                    <div className="post-time">5 mins ago</div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center post-type'>
                    <span className="">CHALLENGE COMPETITION</span>
                    <div className="post-time">Rating</div>
                </div>
                <img id='post-logo' src = {require("../../asset/material/guiness.jpeg")} alt="User Avatar"/>
            </div>
            <div className="post-content"> 

              {/* <img src={require(`../../asset/images/${post.link}`)} alt="" /> */}
              <video src={require(`../../asset/postVideos/samir.webm`)} controls />

                {/* <video className ='video' width="100%" height="400" controls>
                <source src = {require(`../../asset/images/${post.link}`)} type="video/mp4"/>
                </video> */}
            </div>
            <div className="post-footer">
                <button className="btn btn-light btn-sm" > <i className="fa fa-thumbs-up"> like</i></button>
                <button className="btn btn-light btn-sm"><i className="fa fa-chat-dots"></i> Comment</button>
                <button className="btn btn-light btn-sm"><i className="fa fa-share"></i> Share</button>
            </div>
        </div> 
      
   
  )
}

export default ChallengePost
