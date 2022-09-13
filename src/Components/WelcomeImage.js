import React from 'react'
import welcomeImage from '../assets/welcome_image.jpg'
import Course from './Course'
import './WelcomeImage.css'

const WelcomeImage = () => {
  return (
    <div>
      <img className="welcome-image" src={welcomeImage}/>

      <div className="welcome-inner">
        <div className="welcome-name">
        <h1>Uva Wellassa University</h1> 
        </div>

        <div className="welcome-name">
        <h3>My Courses</h3>
        <div className="welcome-course row">
          <div className="col-3">
          <Course/>
          </div>
          <div className="col-3">
          <Course/>
          </div>
          <div className="col-3">
          <Course/>
          </div>
          <div className="col-3">
          <Course/>
          </div>
        </div>
       
        </div>
        
      </div>
     
    </div>
  )
}

export default WelcomeImage