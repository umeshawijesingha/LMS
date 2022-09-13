import React from 'react'
import './Announcement.css'
import {FaUserCircle} from 'react-icons/fa'
const Announcement = () => {
  return (
    <div className='announcements'>
        <div className="card w-75">
            <div className='announcement'>

            <div className="card-body" >
              <div className='row'>
                <div className='col-1'> <span> <FaUserCircle size={50} style={{"color":"#E6E6E6"}}/></span></div>
                <div className='col-10'>
                  <h5 className="card-title" >Card title</h5>
                  <p style={{"font-size":"17px"}}>NOTICE Examination Time Table (Re-sit) Semester II, Academic Year 2020/2021 (Physically conducting Course Units Only).
by admin Indika - Friday, 19 November 2021, 3:24 PM</p>
    <a href="#">NOTICE NEW.pdf</a>
                  
                </div>
             
           
           
              </div>
             

  </div>
            </div>
  
</div>
    </div>
  )
}

export default Announcement