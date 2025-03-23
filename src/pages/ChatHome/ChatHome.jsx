import React,{useState,useEffect,useRef} from 'react'
import "./ChatHome.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {useNavigate} from 'react-router-dom'

function ChatHome() {
  const navigate = useNavigate()



  let TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  
    let that = this;
    let delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) {
      delta /= 2;
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  
  window.onload = function () {
    let elements = document.getElementsByClassName("txt-rotate");
    for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute("data-rotate");
      let period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  };
  




  return (
    <>
    
    <div id='chatHome'>
        <Navbar/>     
      <video id="v1" src="/Videoes/v1.mp4" autoPlay muted loop/>

      <div className="chathometext">
      <h5>
      Your Safe Space – 
      <span
        className="txt-rotate"
        data-period="2000"
        data-rotate='[ "Private.", "Reliable.", "Safe." ]'
      ></span>
    </h5>
      </div>




      <button id='chatusbtn' onClick={()=>navigate('/chat')}> <i className="ri-gemini-fill"></i>&nbsp;Chat With Us</button>
      <Footer num={3}/>
    </div>
    </>
  )
}

export default ChatHome
