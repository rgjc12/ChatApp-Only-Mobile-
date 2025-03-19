import React, { useRef, useEffect } from "react";
import "./FooterComp.css";
import { Link } from "react-router-dom";
import gsap from "gsap";

const FooterComp = ({ icon, text, link, onClick, isActive }) => {
  const backRef = useRef(null);

  // Animate background when isActive changes
  useEffect(() => {
    if (isActive) {
      gsap.to(backRef.current, { width: "8vh", left: "0", duration: 0.4,ease: "expo.out", });
    } else {
      gsap.to(backRef.current, { width: "0vh", left: "50%", duration: 0.4,ease: "expo.out" });
    }
  }, [isActive]);

  return (
    <Link to={link} id="footercomp" onClick={onClick}>
      <div className="icon">{icon}</div>
      <p className="text">
        {text} <div className="back" ref={backRef}></div>
      </p>
    </Link>
  );
};

export default FooterComp;
