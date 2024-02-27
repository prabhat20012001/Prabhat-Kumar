import React from 'react'
import pdf from '../pdf/resume.pdf'
import hero from "../assets/hero/hero.avif"
const Home = () => {
  return (
    <div className='container home'>
        <div className="left">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, error.</h1>
            <a href={pdf} download="Prabhat-resume.pdf" className="btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="right">
            <div className="img">   
                <img src={hero}  alt="hero" />
            </div>
        </div>
      
    </div>
  )
}

export default Home
