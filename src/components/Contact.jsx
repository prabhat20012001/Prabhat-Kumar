import React from 'react'
import {FaSquareInstagram} from "react-icons/fa6"
import {CiFacebook} from "react-icons/ci"
import { CiLinkedin } from 'react-icons/ci'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaGithubSquare } from 'react-icons/fa'
import {SiGmail} from "react-icons/si"
const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
<h1 className='text-center'>CONTACT ME</h1>
<div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
  <a href=''  target='_blank' className="items">
  <FaSquareInstagram className='icons' />
  </a>
  <a href=''  target='_blank'className="items">
<CiFacebook className='icons'/>
  </a>
  <a href='' target='_blank' className="items">
    <CiLinkedin className='icons'/>
  </a>
  <a href='' target='_blank' className="items">
<FaSquareXTwitter className='icons'/>
  </a>
  <a href=''  target='_blank'className="items">
<FaGithubSquare className='icons'/>
  </a>
  <a href='mailto:prabhatkumarmnnit@gmail.com' target='_blank' className="items">
<SiGmail className='icons'/>
  </a>
</div>


      </div>
    </>
  )
}

export default Contact
