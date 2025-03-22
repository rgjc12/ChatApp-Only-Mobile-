import React, { useState, useEffect ,useRef} from 'react'
import "./Discover.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useLocation, useNavigate } from 'react-router-dom';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);



function Discover() {


  const lenis = new Lenis();
  const location = useLocation();
  const navigate=useNavigate();
  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy(); 
  }, [lenis]);
  useEffect(() => {
    lenis.stop(); 
    window.scrollTo(0, 0); 
    lenis.start(); 
  }, [location]);







  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    detectSwipe();
  };

  const detectSwipe = () => {
    if (touchStartX.current && touchEndX.current) {
      const swipeDistance = touchEndX.current - touchStartX.current;

      if (swipeDistance > 10) {
        // ✅ If swipe is right, navigate to /home
        navigate("/");
      }
    }
  };
  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);



  let initialImages = [
    { url: "/Images/1.avif", top: "30%", left: "15%", Act: false },
    { url: "/Images/2.avif", top: "38%", left: "23%", Act: false },
    { url: "/Images/3.avif", top: "29%", left: "56%", Act: false },
    { url: "/Images/4.avif", top: "52%", left: "31%", Act: false },
    { url: "/Images/5.avif", top: "43%", left: "38%", Act: false },    
  ];

  const page2text=useRef(null);

  const [images, setImages] = useState(initialImages);
  const scrollThresholds = [10, 55, 89, 100, 170, 230]; 
  const toggleImages = (currentScroll) => {
    setImages(prevImages => 
      prevImages.map((image, index) => {
        if (currentScroll > scrollThresholds[index]) {
          return { ...image, Act: true }; 
        } else {
          return { ...image, Act: false }; 
        }
      })
    );
  };
  useEffect(() => {
    document.addEventListener('scroll',()=>{
        toggleImages(window.scrollY);  
    }); 
  });

  
useGSAP(()=>{
  
gsap.from("#f1 h1,#f2 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.39,
  duration: 1.5
})
gsap.to("#f1",{
  x:"-23vh",
  opacity:0.3,
  scrollTrigger:{
    trigger:"#f1 h1",     
      start:"top 38%",
      end:"top 1%",
        scrub:2,
       
  } 
});
gsap.to("#f2",{
  x:"23vh",
  opacity:0.3,
  scrollTrigger:{
    trigger:"#f1 h1",     
      start:"top 38%",
      end:"top 1%",
        scrub:2,       
  } 
});
gsap.to("#vid",{
  width:"90%",
  scrollTrigger:{
    trigger:"#f1 h1",      
      start:"top 36%",
      end:"top 3%",
        scrub:2,
    
  } 
})

})
useGSAP(()=>{
  var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger:"#f1 h1",       
        start: "top -50%",
        end: "top -75%",
        scrub: 3,       
    }
  })
  tl2.to("#discovermain", {
    backgroundColor: "#fff",
  })
gsap.from("#page2-text h1",{
  x:"-9vh",
  opacity:0,
  scrollTrigger:{
    trigger:"#page2-text h1",      
      start:"top 52%",
      end:"top 12%",
        scrub:2,
    
  }  
})
})
useGSAP(()=>{
  gsap.to("#page2-left",{
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    scrollTrigger:{
      trigger:"#page2-left",
      start:"top 52%",
      end:"top 12%",
        scrub:2,       
  } 
  })
  gsap.to(".p2vid1",{
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    scrollTrigger:{
      trigger:"#page2-left",
      start:"top 42%",
      end:"top 8%",
        scrub:2,           
  } 
})
gsap.to(".p2vid2",{
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  scrollTrigger:{
    trigger:"#page2-left",
    start:"top 42%",
    end:"top 7%",
    scrub:2,
  }
})
gsap.from(".up h2",{
  opacity:0,
  y:150,
  
  ease: "back.out(1.4)",
    scrollTrigger:{
      trigger:".btm-text",    
      start:"top 63%",
        end:"top 5%",
        scrub:2,
       stagger:.19,      

    }
    });

})


  return (
    <div>
      <Navbar/>
      <div id="discovermain">
      <div id="page1-text">
       <div id="f1">
         <h1>August</h1>
         <h1>August</h1>
         </div>
       <div id="f2">
         <h2>Healthcare</h2>
         <h2>Healthcare</h2>
         </div>
       </div>
       <div id="p1img">
          {images.map((elem, index) => (
            elem.Act ? (
              <img
                key={index}
                src={elem.url}
                alt={`Image ${index + 1}`}
                style={{ position: 'absolute', top: elem.top, left: elem.left }}
              />
            ) : null
          ))}
        </div>
        <div id="vid">
      <div id="vid-text">
        <h6>HEAL,GROW,HAPPY</h6>
        <h6>BASED IN INDIA.</h6>
      </div>
       <video className="cani"  src="./Videoes/v5.mp4" autoPlay muted loop></video>
         </div>
<div id="page2">
  <div id="page2top">
    <div id="page2-text" ref={page2text}>
      <h1>We Are <span>August </span>Healthcare</h1>
    </div>
  </div>
  <div id="page2bottom">
  <div id="page2-left">
    <img src="./Images/1.png" alt="1"/>
      <div className="p2vid1"><video src="./Videoes/v6.mp4" autoPlay muted loop></video></div>
      <div className="p2vid2"><video src="./Videoes/v7.mp4" autoPlay muted loop></video></div>
    </div>
    <div id="page2-right">
    <div className="btm-text">
             <div className="up"><h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are a mental health app.</h2></div>
             <div className="up"><h2>dedicated to providing compassionate</h2></div>
             <div className="up"><h2>&nbsp;&nbsp;and personalized support. With</h2></div>
             <div className="up"><h2>&nbsp;&nbsp;innovative tools and expert guidance</h2></div>
             <div className="up"><h2>&nbsp;&nbsp;navigate life's challenges.</h2></div>            
           </div>
    </div>
  </div>
  <div id="page-two-lastbut">

  </div>
</div>
<div id="page3">

</div>

      </div>
      
    </div>
  )
}

export default Discover
