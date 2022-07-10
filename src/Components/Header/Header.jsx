import React from 'react'
import logo from '../../assets/logo_uwu_.jpg'
import './Header.css'


const Header = () => {
  return (

    <div>
        
       

        
        <nav className="navbar navbar-expand-sm bg-white fixed-top">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#"><img className='logo' src={logo}/></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"> <h1 className='headerTitle'>Virtual Learning Environment</h1></a>
      </li>
      
      
    </ul>
  </div>
</nav>

       
    </div>
  )
}

export default Header