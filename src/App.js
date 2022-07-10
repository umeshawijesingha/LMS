
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomeBanner from './Components/HomeBanner/HomeBanner';
import HomeImage from './Components/HomeImage/HomeImage';
import HomeOption from './Components/HomeOption/HomeOption';
import Login from './Components/Login/Login';
import SiteAnnouncement from './Components/SiteAnnouncement/SiteAnnouncement';
function App() {
  return (
    <div className="App">
      
        <Header/>
        <HomeImage/>
        <Login/>
        <HomeOption/>
        <SiteAnnouncement/>
        <HomeBanner/>
        <Footer/>
     
    </div>
  );
}

export default App;
