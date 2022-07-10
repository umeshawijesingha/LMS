import React from 'react'
import './HomeBanner.css'
import {FaUserCircle} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {FaPuzzlePiece} from 'react-icons/fa'

const HomeBanner = () => {
  return (
    <div className='homeBanner'>
        <div className='row'>
            <div className='col-3'>
                <h3 className='bannerTitle'>SOME NUMBERS</h3>
               
            </div>

            <div className='col-3'>
                <h3 className='bannerImage'> <FaUserCircle/></h3>
                <hr className='seperator'/>
                <h4 className='title'>USERS</h4>
            </div>

            <div className='col-3'>
                <h3 className='bannerImage'> <FaGraduationCap/></h3>
                <hr className='seperator'/>
                <h4 className='title'>COURSES</h4>
            </div>

            <div className='col-3'>
                <h3 className='bannerImage'> <FaPuzzlePiece/></h3>
                <hr className='seperator'/>
                <h4 className='title'>ACTIVITIES</h4>
            </div>

        </div>
    </div>
  )
}

export default HomeBanner