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



  let initialImages = [
    { url: "/Images/1.avif", top: "30%", left: "15%", Act: false },
    { url: "/Images/2.avif", top: "38%", left: "23%", Act: false },
    { url: "/Images/3.avif", top: "29%", left: "56%", Act: false },
    { url: "/Images/4.avif", top: "52%", left: "31%", Act: false },
    { url: "/Images/5.avif", top: "43%", left: "38%", Act: false },    
  ];



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
       <video class="cani" autoPlay muted loop src="./Videoes/v5.mp4"></video>
         </div>
      </div>
      <Footer num={2}/>
    </div>
  )
}

export default Discover
