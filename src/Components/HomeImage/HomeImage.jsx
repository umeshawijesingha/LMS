import React from 'react'
import homeImage from '../../assets/home_image.jpg'
import './HomeImage.css'

const HomeImage = () => {
  return (
    <div>
        <img className='homeImage' src={homeImage}/>
    </div>
  )
}

export default HomeImage