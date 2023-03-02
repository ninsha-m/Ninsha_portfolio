import React from 'react'
import './Myskills.css'

const Myskills = () => {
  return (
    <div className='row myskills'>
      <div className='column myskills'>
        <div className='header2'><h2>SKILLS</h2> </div>
        
        <div class="skills-main">
            <div class="skill-bar">
                <div class="info">
                    <p>HTML</p>   
                </div>
                <div class="bar">
                    <span class="html"></span>
                </div>
            </div>

            <div class="skill-bar">
                <div class="info">
                    <p>CSS</p>        
                </div>
                <div class="bar">
                    <span class="css"></span>
                </div>
            </div>

            <div class="skill-bar">
                <div class="info">
                    <p>Bootstrap</p>        
                </div>
                <div class="bar">
                    <span class="sass"></span>
                </div>
            </div>

            <div class="skill-bar">
                <div class="info">
                    <p>Java Script</p>  
                </div>
                <div class="bar">
                    <span class="js"></span>
                </div>

            </div>
            <div class="skill-bar">
                <div class="info">
                    <p>React js</p>    
                </div>
                <div class="bar">
                    <span class="react"></span>
                </div>
            </div>

            <div class="skill-bar">
                <div class="info">
                    <p>Node js</p>        
                </div>
                <div class="bar">
                    <span class="node"></span>
                </div>
            </div>

            <div class="skill-bar">
                <div class="info">
                    <p>Express js</p>        
                </div>
                <div class="bar">
                    <span class="express"></span>
                </div>
            </div>

            <div class="skill-bar">
                <div class="info">
                    <p>Mongo DB</p>        
                </div>
                <div class="bar">
                    <span class="mongo"></span>
                </div>
            </div>
            
        </div>

      </div>
    </div >
  )
}

export default Myskills