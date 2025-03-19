import React, { useState } from "react";
import "./Footer.css";
import FooterComp from "../FooterComp/FooterComp";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  let comps = [
    {
      icon: [
        <i className="ri-chat-ai-line"></i>,
        <i className="ri-chat-ai-fill"></i>,
      ],
      text: "Chats",
      link: "/chat",
    },
    {
      icon: [
        <i className="ri-movie-line"></i>,
        <i className="ri-movie-fill"></i>,
      ],
      text: "Shorts",
      link: "/shorts",
    },
    {
      icon: [
        <i className="ri-compass-discover-line"></i>,
        <i className="ri-compass-discover-fill"></i>,
      ],
      text: "Discover",
      link: "/aboutus",
    },
    {
      icon: [
        <i className="ri-home-heart-line"></i>,
        <i className="ri-home-heart-fill"></i>,
      ],
      text: "Home",
      link: "/",
    },
  ];

  return (
    <div id="footermain">
     {comps.map((comp, index) => (
        <FooterComp
          key={index}
          icon={activeIndex === index ? comp.icon[1] : comp.icon[0]}
          text={comp.text}
          link={comp.link}
          isActive={activeIndex === index} 
          onClick={() => setActiveIndex(index)} 
        />
      ))}
    </div>
  );
};

export default Footer;
