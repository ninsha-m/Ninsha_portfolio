import React from 'react'
import './Getintouch.css'

function Getintouch() {
  return (
    <div className='row getintouch'>
      <div className='column getintouch'>
        <div className='header3'><h2> Get In Touch</h2> </div>

          
            <div className=' column left-side'>
              
              <form className='form'>
                <div className='input-box'>
                  <input type='text' placeholder=' Name'></input>
                </div>
                <div className='input-box'>
                  <input type='text' placeholder=' Email'></input>
                </div>
                <div className='input-box'>
                  <input type='text' placeholder=' Subject'></input>
                </div>
                <div className='input-box message-box'>
                  <textarea placeholder=' Your Message...'></textarea>
                </div>
                <a className='button' href=''>Send Message</a>
              </form>
            </div>
      </div>  
     
      
    </div>  
      
  )
}

export default Getintouch