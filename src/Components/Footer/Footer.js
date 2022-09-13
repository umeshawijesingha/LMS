import React from 'react'
import {BsGlobe} from 'react-icons/bs'
import {BiEnvelope} from 'react-icons/bi'

import './Footer.css'
const Footer = () => {
  return (
    <div>
        <div className='footer'>
        <h3>Stay in touch</h3>
        <h4>Contact us for any Technical difficulties and inquires</h4>
        <BsGlobe size={25}/><a href=" http://www.uwu.ac.lk"> http://www.uwu.ac.lk</a><br/>
        <BiEnvelope size={25}/><a href="  helphesk@uwu.ac.lk">  helphesk@uwu.ac.lk</a>
        </div>
        
        <div className='footerBanner'>
            <h6>PROUDLY MADE WITH UNW</h6>
            <h6>All right reserved</h6>
        
        </div>


    </div>
  )
}

export default Footer