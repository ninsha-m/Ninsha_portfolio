import React from 'react'
import './Aboutme.css'

const Aboutme = () => {
  return (
    <div className='row aboutme'>
      
      <div className='column aboutme'>
      <div className=' column my-image'></div>
        <div className='header2'><h2>ABOUT ME</h2></div>
        
        <div className='aboutme-content'>

          <h4 className='content'>I'm Ninsha M</h4>
          <h3 className='content'>I'm a Full Stack Developer From Kerala</h3>
          <p className='para'>My objective is simply to be the best 
          web developer that I can be and to 
          contribute to the technology industry all that I know and can do.</p>
          

        </div>
      </div>

      <div className='column details'>
        <div className='column class1'>
          <li><span> Full Name:</span> Ninsha M</li>
          <li><span> Address:</span> Mlpm, Kerala</li>
          <li> <span>Phone Number:</span> 8136856770</li>
        </div> 
        <div className=' column class2'>
          <li> <span>Birthday:</span> 20 Sept 1997</li>
          <li><span> Nationality:</span> Indian</li>
          <li> <span>Email:</span> ninsha.nin@gmail.com</li>
        </div>
      </div>
    </div>
  )
}

export default Aboutme