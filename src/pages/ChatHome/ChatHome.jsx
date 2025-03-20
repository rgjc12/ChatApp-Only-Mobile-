import React,{useState,useEffect,useRef} from 'react'
import "./ChatHome.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function ChatHome() {
  return (
    <>
    
    <div id='chatHome'>
        <Navbar/>     
      <video id="v1" src="/Videoes/v1.mp4" autoPlay muted loop/>
      <Footer num={3}/>
    </div>
    </>
  )
}

export default ChatHome
