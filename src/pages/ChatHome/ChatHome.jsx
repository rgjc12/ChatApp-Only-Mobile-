import React,{useState,useEffect,useRef} from 'react'
import "./ChatHome.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {useNavigate} from 'react-router-dom'

function ChatHome() {
  const navigate = useNavigate()
  return (
    <>
    
    <div id='chatHome'>
        <Navbar/>     
      <video id="v1" src="/Videoes/v1.mp4" autoPlay muted loop/>
      <button id='chatusbtn' onClick={()=>navigate('/chat')}> <i className="ri-gemini-fill"></i>&nbsp;Chat With Us</button>
      <Footer num={3}/>
    </div>
    </>
  )
}

export default ChatHome
