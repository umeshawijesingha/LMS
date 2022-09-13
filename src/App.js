import React from 'react';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import WelcomeImage from './Components/WelcomeImage';

import HomePage from './Pages/HomePage';
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <div className="row" >
        <div className="col-2">
      
       <SideBar/>
        </div>
      
      <div className="col-8" >
      <Header className="welocme" />
      </div>
      </div>

      <WelcomeImage/>
     
     
        
     
    </div>
  );
}

export default App;
