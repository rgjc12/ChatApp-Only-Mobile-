import React, {useEffect,useRef} from "react";
import "./Shorts.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Heart, ThumbsDown, MessageCircle, Share2 } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
import "swiper/css";


function Shorts() {
   
    useGSAP(() => {
        gsap.to("#navbar", {
            rotateX: "-108deg",
            y: "-31vw",           
            duration: 4.89,
            ease: "expo.out",
        });
    }, []);

 
  const slides = [
    {
      id: 1,
      video:"./Videoes/v2.mp4",
      likes: 1024,
      comments: 89,
    },
    {
      id: 2,
      video:"./Videoes/v3.mp4",
      likes: 842,
      comments: 56,
    },
    {
      id: 3,
      video:"./Videoes/v4.mp4",
      likes: 1532,
      comments: 124,
    },
  ];






  return (
    <>
    <Navbar/>
    <div className="shorts-container">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        keyboard={{
          enabled: true,
        }}      
        loop={true}
        modules={[Mousewheel, Keyboard]}
        className="shorts-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="slide-content">
            <div className="media-container">
              <video src={slide.video} autoPlay muted loop />
            </div>
            
            <div className="interaction-buttons">
              <div className="interaction-button like">
                <button aria-label="Like">
                  <Heart strokeWidth={2.5} />
                </button>
                <span>{slide.likes}</span>
              </div>
              
              <div className="interaction-button dislike">
                <button aria-label="Dislike">
                  <ThumbsDown strokeWidth={2.5} />
                </button>
              </div>
              
              <div className="interaction-button comment">
                <button aria-label="Comment">
                  <MessageCircle strokeWidth={2.5} />
                </button>
                <span>{slide.comments}</span>
              </div>
              
              <div className="interaction-button share">
                <button aria-label="Share">
                  <Share2 strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <Footer num={1}/>
    </>
  );
}

export default Shorts;
