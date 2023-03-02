import React from 'react'
import './Footer.css'

import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

function Footer() {
  return (
    
      <div className='column footer'>
        <div className='social'>
          <a href=''><BsFacebook /></a>
          <a href=''><BsInstagram /></a>
          <a href=''><BsTwitter /></a>
          <a href=''><BsLinkedin /></a>
          <a href=''><BsGithub /></a>
        </div>
        <ul className='list'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About Me</a></li>
            <li><a href='#'>My Skills</a></li>
            <li><a href='#'>Contact Me</a></li>
             
        </ul>
         
      </div>
    
  )
}

export default Footer