import React from 'react'
import {BsGlobe} from 'react-icons/bs'
import {BiEnvelope} from 'react-icons/bi'

import './Footer.css'
const Footer = () => {
  return (
    <div>
        <div className='footer'>
        <h4>Stay in touch</h4>
        <h5>Contact us for any Technical difficulties and inquires</h5>
        <BsGlobe/><a href=" http://www.uwu.ac.lk"> http://www.uwu.ac.lk</a><br/>
        <BiEnvelope/><a href="  helphesk@uwu.ac.lk">  helphesk@uwu.ac.lk</a>
        </div>
        
        <div className='footerBanner'>
            <h6>PROUDLY MADE WITH Moodle logo</h6>
            <h6>Made with  by conecti.me</h6>
        
        </div>


    </div>
  )
}

export default Footer