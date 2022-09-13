import React from 'react'
import { useState } from 'react';
import logo from '../../assets/logo_uwu_.jpg'
import './Header.css'
import {HiOutlineBell} from 'react-icons/hi'
import {FaUserCircle} from 'react-icons/fa'
import {MdOutlineArrowDropDown} from 'react-icons/md'



const Header = () => {
  
 let [user,setUser]=useState(true)


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
      <li className="header-bell-icon"> {user && (<HiOutlineBell size={25}/>)}</li>
      <li className="header-user-icon">{user && (<div><FaUserCircle size={40} style={{"color":"#E6E6E6"}}/><MdOutlineArrowDropDown/></div>)}</li>
     
      
    </ul>
  </div>
</nav>

{/* if(user){
  <h1>logged in</h1>
}else{
  <h1>not logged in</h1>
} */}


  

      
    </div>
  )
}

export default Header