
import React, { useCallback, useContext, useRef, useState } from 'react'
import './CreatePost.css'
import Webcam from 'react-webcam';
import { AuthContent } from '../Auth/AuthContent';


const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
  };

const CreatePost = () => {
     
    const webcamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [capturing, setCapturing] = useState(false);
    const [recordedChunks, setRecordedChunks] = useState([]);
    const {user} = useContext(AuthContent)
  
    const handleStartCaptureClick = useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
          mimeType: "video/webm"
        });
        mediaRecorderRef.current.addEventListener(
          "dataavailable",
          handleDataAvailable
        );
        mediaRecorderRef.current.start();
      }, [webcamRef, setCapturing, mediaRecorderRef]);
    
      const handleDataAvailable = useCallback(
        ({ data }) => {
          if (data.size > 0) {
            setRecordedChunks((prev) => prev.concat(data));
          }
        },
        [setRecordedChunks]
      );
    
      const handleStopCaptureClick = useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);
      }, [mediaRecorderRef, webcamRef, setCapturing]);
    
      const handleDownload = useCallback(() => {
        if (recordedChunks.length) {
          const blob = new Blob(recordedChunks, {
            type: "video/webm"
          });
          const url = URL.createObjectURL(blob);
          console.log(url)
          const a = document.createElement("a");
          document.body.appendChild(a);
          a.style = "display: none";
          a.href = url;
          a.download = "react-webcam-stream-capture.webm";
          a.click();
          window.URL.revokeObjectURL(url);
          setRecordedChunks([]);
        }
      }, [recordedChunks]);
  
    return (
 
        

<div className="post-container mt-4">
            samcoeur2013@gmail.com
            <div className="post-header">
                <img id='imgProfile' src = {require(`../../asset/images/${user.profileImg}`)} alt="User Avatar"/>
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
                <Webcam audio={true} ref={webcamRef} style={{width:"100%" ,height:"100%"}}   />
                {capturing ? (
                <button id='stopCapture' onClick={handleStopCaptureClick}><i className="fa fa-share"></i></button>
                ) : (
                <button id='startCapture' onClick={handleStartCaptureClick}><i className="fa fa-camera"></i></button>
                )}
                {recordedChunks.length > 0 && (
                <button onClick={handleDownload}>Download</button>
                )}

            </div>
            <div className="post-footer">
                <button className="btn btn-light btn-sm" > <i className="fa fa-thumbs-up"> like</i></button>
                <button className="btn btn-light btn-sm"><i className="fa fa-chat-dots"></i> Comment</button>
                <button className="btn btn-light btn-sm"><i className="fa fa-share"></i> Share</button>
            </div>
        </div> 
      
   
    );
   
}

export default CreatePost
