import React from "react";
import pdf from "../pdf/Prabhat-Kumar-Resume.pdf";
import hero from "../assets/hero/hero.avif";
import Typed from "typed.js";

import { useRef, useEffect } from "react";
const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My name is Prabhat Kumar",
        "I'm full stack developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="home">
      <div className="left " data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typedRef}></h1>
        <a
          href={pdf}
          download="Prabhat-Kumar-Resume.pdf"
          className="btn btn-outline-warning my-3"
        >
          Download Resume
        </a>
      </div>
      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;
