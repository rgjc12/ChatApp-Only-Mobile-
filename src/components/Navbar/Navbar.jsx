import React, { useState, useEffect, useRef } from 'react'
import "./Navbar.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const [greeting, setGreeting] = useState('');
  const textRef = useRef(null);
  const textRef1 = useRef(null);

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting('Good Morning');
      } else if (hour >= 12 && hour < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Night');
      }
    };

    getGreeting(); 
    

  }, []);

  
   
  

  return (
    <div id='navbar'>
      <div id="navleft">
        <div id="navleftimg">
        <img src="p1.png" alt="logo" />
        </div>
        <div id="navlefttext">
      
            <div className="navltext1" ref={textRef}>{greeting},</div>            
        
        <div id="navltext2">
          <h1>User</h1>
        </div>
       
        </div>
      </div>
      <div id="navright">
      <i className="ri-user-heart-line"></i>
      </div>
    </div>
  )
}

export default Navbar
