import React from 'react'
import './Home.css'

import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'




function Home() {
  return (


    <div className='row'>
      <div className='column name'>
        <div className='header1'>
          <h6>NINSHA M | Portfolio</h6>
        </div>
        <ul className='hi'>
          <h5 className='hello'>Hi! I'm</h5>
          <h1 className='ninsha'>NINSHA M</h1>
          <h4 className='job'> I am a <span>Full Stack Developer</span></h4>
          <a className='btn' href=''>Resume</a>
        </ul>
      </div>
      <div className='column navigation'>
        <ul className='nav'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About Me</a></li>
          <li><a href='#'>My Skills</a></li>
          <li><a href='#'>Contact Me</a></li>
        </ul>
        <ul className='social-links'>
          <li><a href=''><BsFacebook /></a></li>
          <li><a href=''><BsInstagram /></a></li>
          <li><a href=''><BsTwitter /></a></li>
          <li><a href=''><BsLinkedin /></a></li>
          <li><a href=''><BsGithub /></a></li>
        </ul>
      </div>
    </div >
    



  )
}

export default Home