import React from 'react'
import './HomeOption.css'
import homeoptionimage from '../../assets/home_option.jpeg'
import homeoption from '../../assets/home_option.png'

const HomeOption = () => {
  return (
    <div className='homeOption'>
        <div className="row">
    <div className="col-3">
      <div className="card">
        <div className="card-body">
          <img src={homeoptionimage} className="homeOPtionImage"/>
          <h2 className="card-text" >Access OLD VLE</h2>
          <a href="#" className="btn btn-primary" id="bb">Read More</a>
        </div>
      </div>
      </div>

      <div className="col-3">
      <div className="card">
        <div className="card-body">
          <img src={homeoptionimage} className="homeOPtionImage"/>
          <h2 className="card-text" >University Web</h2>
          <a href="#" className="btn btn-primary" id="bb">Read More</a>
        </div>
      </div>
      </div>

     

      <div className="col-3">
      <div className="card">
        <div className="card-body">
          <img src={homeoption} className="homeOPtionImage"/>
          <h2 className="card-text" >University Mail</h2>
          <a href="#" className="btn btn-primary" id="bb">Read More</a>
        </div>
      </div>
      </div>

      <div className="col-3">
      <div className="card">
        <div className="card-body">
          <img src={homeoption} className="homeOPtionImage"/>
          <h2 className="card-text" >University Library</h2>
          <a href="#" className="btn btn-primary" id="bb">Read More</a>
        </div>
      </div>
      </div>

      </div>
      </div>
  )
}

export default HomeOption