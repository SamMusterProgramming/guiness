import React, { useContext, useEffect, useState } from 'react'
import "./Timeline.css"
import ChallengePost from '../challengePosts/ChallengePost'
import { AuthContent } from '../Auth/AuthContent'
import CreatePost from '../createPost/CreatePost'


const Timeline = () => {

  const {user} = useContext (AuthContent)
  const [posts, setPosts] = useState([])
  const [createPost , setCreatePost] = useState(false);
  

  async function loadPosts() {
     await fetch(`http://localhost:8000/timeline/${user._id}`).then(res => res.json() ).then(data => {
       setPosts(data) 
       console.log(data)
       console.log("user is " + user.username)
     })
  }
  useEffect(()=>{
    console.log(posts)
  },[posts])
  



  return (
    <>
       <div className='d-flex justify-content-center gap-4 align-items-center headButton'>
               <button id='guinessButton' onClick={(e)=>{loadPosts(e)}} className='btn' type='btn'>Guiness</button>
               <button id='guinessButton' className='btn' type='btn'>Talent</button>
               <button onClick={()=>setCreatePost(true)} id='guinessButton' className='btn' type='btn'>Create Challenge</button>

       <div>
       
      </div>
       </div>
       <div className='container mt-5 d-flex flex-column align-items-center gap-3 justify-content-start timelineContainer'>
              {createPost? (<CreatePost/> ):(
                 posts.map((post, i) => (
                  <ChallengePost key={i} post={post} /> 
               ))
              ) }
               
       </div>
    </>
  )
}

export default Timeline
