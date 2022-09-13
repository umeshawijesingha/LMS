import React from 'react'
import courseImage from '../assets/course_image.jpg'

const Course = () => {
  return (
    <div>
          <div className="card">
    <img src={courseImage} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
    </div>
  )
}

export default Course